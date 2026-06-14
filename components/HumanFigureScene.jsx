'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HumanFigureScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    // ── Scene / Camera ───────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 4;

    // ── Particle helpers ─────────────────────────────────────────────────
    const positions = [];
    const colors = [];
    const white = new THREE.Color(0xffffff);
    const silver = new THREE.Color(0xaaaaaa);
    const gray = new THREE.Color(0x444444);

    function push(x, y, z) {
      positions.push(x, y, z);
      const r = Math.random();
      const c = r < 0.55 ? white : r < 0.82 ? silver : gray;
      colors.push(c.r, c.g, c.b);
    }

    function jitter(v, amt) {
      return v + (Math.random() - 0.5) * amt;
    }

    // ── Head (sphere shell) ──────────────────────────────────────────────
    const HEAD_Y = 1.75;
    const HEAD_R = 0.40;
    for (let i = 0; i < 700; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      const r = HEAD_R * (0.82 + Math.random() * 0.18);
      push(
        r * Math.sin(v) * Math.cos(u),
        HEAD_Y + r * Math.sin(v) * Math.sin(u),
        r * Math.cos(v) * 0.85
      );
    }

    // ── Neck ─────────────────────────────────────────────────────────────
    for (let i = 0; i < 90; i++) {
      const a = Math.random() * Math.PI * 2;
      const rr = Math.random() * 0.09;
      push(
        rr * Math.cos(a),
        1.32 + Math.random() * 0.36,
        rr * Math.sin(a) * 0.6
      );
    }

    // ── Torso ────────────────────────────────────────────────────────────
    for (let i = 0; i < 1400; i++) {
      const ty = Math.random();
      const halfW = 0.42 * (1 - ty * 0.18);
      const x = jitter(0, halfW * 2);
      const y = 0.18 + ty * 1.14;
      const z = jitter(0, 0.28);
      push(x, y, z);
    }

    // ── Arms ─────────────────────────────────────────────────────────────
    const armThick = 0.07;
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 480; i++) {
        const t = Math.random();
        const sx = side * 0.44, sy = 1.10;
        const ex = side * 0.95, ey = 0.05;
        push(
          jitter(sx + (ex - sx) * t, armThick),
          jitter(sy + (ey - sy) * t, armThick),
          jitter(0, armThick * 0.7)
        );
      }
    }

    // ── Legs ─────────────────────────────────────────────────────────────
    const legThick = 0.09;
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 560; i++) {
        const t = Math.random();
        const sx = side * 0.21, sy = 0.18;
        const ex = side * 0.27, ey = -1.70;
        push(
          jitter(sx + (ex - sx) * t, legThick),
          jitter(sy + (ey - sy) * t, legThick * 0.5),
          jitter(0, legThick)
        );
      }
    }

    // ── Subtle outer halo ────────────────────────────────────────────────
    for (let i = 0; i < 260; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      const r = 1.3 + Math.random() * 1.0;
      positions.push(
        r * Math.sin(v) * Math.cos(u),
        r * Math.sin(v) * Math.sin(u) + 0.1,
        r * Math.cos(v) * 0.25
      );
      colors.push(0.9, 0.9, 0.9);
    }

    const haloStart = positions.length / 3 - 260;

    // ── BufferGeometry & Points ──────────────────────────────────────────
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.022,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const figure = new THREE.Points(geo, mat);
    figure.position.y = -0.05;
    scene.add(figure);

    // ── Halo glow layer ───────────────────────────────────────────────────
    const haloGeo = new THREE.BufferGeometry();
    haloGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions.slice(haloStart * 3), 3)
    );
    const haloMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xff2200,
      transparent: true,
      opacity: 0.07,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const halo = new THREE.Points(haloGeo, haloMat);
    halo.position.y = -0.05;
    scene.add(halo);

    // ── Red orbiting light + fog ──────────────────────────────────────────
    const redLight = new THREE.PointLight(0xff2200, 2.5, 10);
    scene.add(redLight);
    scene.fog = new THREE.FogExp2(0x110000, 0.06);

    // ── Mouse tracking ───────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ───────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Animation loop ───────────────────────────────────────────────────
    let animId;
    let tick = 0;
    let camX = 0;
    let camY = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      tick += 0.005;

      figure.rotation.y = tick * 0.25 + mouseX * 0.18;
      figure.rotation.x = mouseY * 0.07;
      halo.rotation.y = figure.rotation.y;
      halo.rotation.x = figure.rotation.x;

      const floatY = Math.sin(tick * 0.65) * 0.07;
      const floatX = Math.sin(tick * 0.43) * 0.04;
      figure.position.y = -0.05 + floatY;
      figure.position.x = floatX;
      halo.position.y = figure.position.y;
      halo.position.x = figure.position.x;

      const lr = 2.8;
      redLight.position.x = Math.cos(tick * 0.38) * lr;
      redLight.position.y = Math.sin(tick * 0.29) * 1.4 + 0.3;
      redLight.position.z = Math.sin(tick * 0.38) * lr * 0.6 + 3.5;
      redLight.intensity = 2.0 + Math.sin(tick * 1.1) * 0.6;

      camX += (mouseX * 0.28 - camX) * 0.04;
      camY += (mouseY * 0.14 - camY) * 0.04;
      camera.position.x = camX;
      camera.position.y = camY;
      camera.lookAt(0, 0.15, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      mat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
