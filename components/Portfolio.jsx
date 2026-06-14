'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// ============================================
// GLOWING 3D GEOMETRY
// ============================================
function GlowingGeometry() {
  const CUBE_SIZE = 80;
  const HALF = CUBE_SIZE / 2;
  const faces = [
    { transform: `translateZ(${HALF}px)` },
    { transform: `translateZ(-${HALF}px) rotateY(180deg)` },
    { transform: `translateX(-${HALF}px) rotateY(-90deg)` },
    { transform: `translateX(${HALF}px) rotateY(90deg)` },
    { transform: `translateY(-${HALF}px) rotateX(90deg)` },
    { transform: `translateY(${HALF}px) rotateX(-90deg)` },
  ];
  const floatDots = [
    { top: '8px',  left: '8px',  color: '#00ffcc' },
    { top: '8px',  right: '8px', color: '#00ff88' },
    { bottom: '8px', left: '8px',  color: '#00ff88' },
    { bottom: '8px', right: '8px', color: '#00ffcc' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      style={{ width: '220px', height: '220px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
    >
      {/* Outer orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', width: '200px', height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(0,255,204,0.22)',
          boxShadow: '0 0 18px rgba(0,255,204,0.1)',
        }}
      >
        <div style={{
          position: 'absolute', top: '-5px', left: 'calc(50% - 5px)',
          width: '10px', height: '10px', borderRadius: '50%',
          background: '#00ffcc', boxShadow: '0 0 12px 4px rgba(0,255,204,0.75)',
        }} />
      </motion.div>

      {/* Inner orbit ring — tilted so it reads as 3-D */}
      <div style={{ position: 'absolute', width: '140px', height: '140px', transform: 'rotateX(65deg)' }}>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '100%', height: '100%', borderRadius: '50%', position: 'relative',
            border: '1px solid rgba(0,255,136,0.35)',
            boxShadow: '0 0 12px rgba(0,255,136,0.15)',
          }}
        >
          <div style={{
            position: 'absolute', top: '-4px', left: 'calc(50% - 4px)',
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#00ff88', boxShadow: '0 0 10px 3px rgba(0,255,136,0.75)',
          }} />
        </motion.div>
      </div>

      {/* 3-D wireframe rotating cube */}
      <div style={{ perspective: '500px', width: `${CUBE_SIZE}px`, height: `${CUBE_SIZE}px` }}>
        <motion.div
          animate={{ rotateY: 360, rotateX: 25 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          style={{ width: `${CUBE_SIZE}px`, height: `${CUBE_SIZE}px`, transformStyle: 'preserve-3d', position: 'relative' }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${CUBE_SIZE}px`, height: `${CUBE_SIZE}px`,
                border: `1.5px solid rgba(0,255,${i % 2 === 0 ? '204' : '136'},${0.85 - i * 0.08})`,
                background: `rgba(0,255,${i % 2 === 0 ? '204' : '136'},0.03)`,
                boxShadow: i < 2 ? '0 0 14px rgba(0,255,204,0.45)' : undefined,
                ...face,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Pulsing corner dots */}
      {floatDots.map((dot, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          style={{
            position: 'absolute',
            width: '6px', height: '6px', borderRadius: '50%',
            background: dot.color,
            boxShadow: `0 0 8px 3px ${dot.color}99`,
            top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom,
          }}
        />
      ))}
    </motion.div>
  );
}

// ============================================
// HERO SECTION
// ============================================
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

// Maximum tilt in degrees — keeps the 3D effect subtle and "in control"
const MAX_TILT = 10;

export function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Tilt is driven only by the cursor's position *within the portrait*,
  // and clamped to ±MAX_TILT so the rotation can never run away.
  const handlePortraitMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: clamp(-py * MAX_TILT * 2, -MAX_TILT, MAX_TILT),
      y: clamp(px * MAX_TILT * 2, -MAX_TILT, MAX_TILT),
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen bg-transparent flex flex-col items-center justify-center px-4 py-28 overflow-hidden"
    >
      {/* Animated background grid effect */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Soft ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, rgba(0, 255, 204, 0.08) 0%, transparent 45%), radial-gradient(circle at 75% 80%, rgba(0, 255, 136, 0.06) 0%, transparent 45%)',
        }}
      />

      {/* Single, centered column — clean reading flow */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans tracking-tight">
            Er. Purushottam Chand Bohora
          </h1>
          <p className="text-lg md:text-xl text-[#00ffcc] font-semibold tracking-wide">
            FOUNDER &amp; TECH ARCHITECT
          </p>
          <p className="text-base md:text-lg text-[#00ff88] font-normal">
            Securing the Web. Building the Future of SaaS.
          </p>
        </motion.div>

        {/* Geometry + Portrait side by side */}
        <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
        <GlowingGeometry />

        {/* Profile Image — controlled, responsive size with a subtle clamped tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
          style={{ perspective: '900px' }}
        >
          {/* Pulsing glow wrapper */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 36px rgba(0, 255, 204, 0.28)',
                '0 0 54px rgba(0, 255, 204, 0.4)',
                '0 0 36px rgba(0, 255, 204, 0.28)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full"
          >
            {/* Tilt container — rotation is clamped to ±10deg and springs back */}
            <motion.div
              onMouseMove={handlePortraitMove}
              onMouseLeave={resetTilt}
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: 'spring', stiffness: 150, damping: 18 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-[#00ffcc] p-2 bg-gradient-to-br from-[#00ffcc]/10 via-transparent to-[#00ff88]/10 backdrop-blur-xl group"
            >
              {/* Static depth shadow so the disc reads as 3D */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    '0 0 30px rgba(0, 255, 204, 0.3), inset 0 0 25px rgba(0, 255, 204, 0.1), 0 18px 35px -10px rgba(0, 0, 0, 0.6)',
                }}
              />

              {/* Inner accent ring */}
              <div className="absolute inset-0 rounded-full border border-[#00ff88]/30 m-1 pointer-events-none" />

              {/* Portrait image */}
              <Image
                src="/portrait.jpg"
                alt="Er. Purushottam Chand Bohora"
                width={256}
                height={256}
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="w-full h-full rounded-full object-cover filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-300"
              />

              {/* Corner accent indicators */}
              <div className="absolute top-3 right-3 w-3 h-3 border-l-2 border-t-2 border-[#00ffcc] group-hover:border-[#00ff88] transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-r-2 border-b-2 border-[#00ffcc] group-hover:border-[#00ff88] transition-colors duration-300" />

              {/* Subtle shine on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </motion.div>
        </div>{/* end geometry + portrait row */}

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#a0aec0] font-sans leading-tight">
            Self-Trust Wins Wars
          </h2>
          <p className="text-lg md:text-xl text-[#cbd5e1] font-normal leading-relaxed">
            Strategy beats effort. Consistency completes what you&apos;ve started.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00ffcc] to-[#00ff88] mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="space-y-4 max-w-2xl"
        >
          <p className="text-base md:text-lg text-[#cbd5e1] leading-relaxed font-normal">
            Cybersecurity Engineer, Full-Stack Developer, and Startup Founder specializing in
            high-performance digital ecosystems. As a CTO and founder, bridging complex cryptographic
            security with scalable business architecture.
          </p>
          <p className="text-base md:text-lg text-[#00ffcc] font-semibold">
            Welcome to my terminal.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex gap-4 flex-wrap justify-center pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 204, 0.6)' }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 bg-[#00ffcc] text-[#0a0e27] font-semibold rounded-lg hover:bg-[#00ff88] transition-colors duration-300 text-lg"
            onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Ventures
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 204, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 border-2 border-[#00ffcc] text-[#00ffcc] font-semibold rounded-lg hover:bg-[#00ffcc]/10 transition-colors duration-300 text-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// EXPERTISE CARDS
// ============================================
export function IdentityCards() {
  const cards = [
    {
      title: 'Defensive & Offensive Security',
      description: 'Hardening systems, vulnerability management, secure code deployment, and robust cryptography.',
      icon: '🛡️',
    },
    {
      title: 'Full-Stack & Architecture',
      description: 'Designing scalable backend logic, intuitive user interfaces, and seamless hosting/cloud infrastructure optimization.',
      icon: '⚙️',
    },
    {
      title: 'Market Strategy & Leadership',
      description: 'Comprehensive competitor analysis, client negotiation, and steering tech startups from ideation to deployment.',
      icon: '🎯',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="ventures"
      className="relative py-24 px-4 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-sans"
        >
          THE CORE IDENTITY
        </motion.h2>
        <p className="text-center text-[#00ffcc] font-semibold text-sm mb-16 tracking-widest">
          [THE TRIPLE THREAT]
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-[#1a1f2e]/60 to-[#0f1419]/60 border border-[#00ffcc]/30 rounded-xl p-8 backdrop-blur-md h-full flex flex-col hover:border-[#00ffcc]/60 transition-all duration-300"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 255, 204, 0.08)',
                }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-sans">
                  {card.title}
                </h3>
                <p className="text-base text-[#cbd5e1] leading-relaxed flex-grow font-normal">
                  {card.description}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-[#00ffcc] to-transparent mt-6 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ============================================
// VENTURES & PROJECTS
// ============================================
export function ProjectMatrix() {
  const ventures = [
    {
      name: 'Tech Break',
      tag: 'Co-Founder & CTO',
      description: 'Leading the technical vision, architecture, and security protocols to disrupt the standard tech learning/consulting landscape.',
    },
    {
      name: 'Chiya Ko Ghar',
      tag: 'Strategic Digital Partner',
      description: 'Spearheading the complete digital transformation, local market penetration strategy, and tech integration for a rising brand.',
    },
    {
      name: '3x Stealth SaaS Products',
      tag: 'IN DEVELOPMENT / BETA',
      description: 'Engineering three proprietary Software-as-a-Service platforms focused on solving high-impact market inefficiencies.',
    },
  ];

  const clients = [
    {
      category: 'Hospitality & Service Engines',
      projects: ['Café Hotel', 'Laundry Services'],
      highlight: 'Integrated secure booking/ordering workflows, high-availability hosting, and optimized database queries.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className="relative py-24 px-4 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-sans"
        >
          THE LIVE MATRIX
        </motion.h2>
        <p className="text-center text-[#00ffcc] font-semibold text-sm mb-16 tracking-widest">
          [PROJECTS & VENTURES DASHBOARD]
        </p>

        {/* Venture Portfolio */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-[#00ffcc] mb-8 border-b border-[#00ffcc]/30 pb-4 tracking-wide">
            A. VENTURE PORTFOLIO
          </h3>
          <div className="space-y-6">
            {ventures.map((venture, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group"
              >
                <div className="bg-gradient-to-r from-[#1a1f2e]/40 to-transparent border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/50 transition-all duration-300 hover:bg-[#1a1f2e]/60"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 255, 204, 0.05)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white font-sans">{venture.name}</h4>
                      <p className="text-[#00ffcc] font-semibold text-sm mt-2">{venture.tag}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#cbd5e1] leading-relaxed font-normal">{venture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Ecosystems */}
        <div>
          <h3 className="text-lg font-semibold text-[#00ffcc] mb-8 border-b border-[#00ffcc]/30 pb-4 tracking-wide">
            B. CLIENT ECOSYSTEMS
          </h3>
          <div className="space-y-6">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-[#1a1f2e]/40 to-transparent border border-[#00ffcc]/20 rounded-xl p-8 hover:border-[#00ffcc]/50 transition-all duration-300 hover:bg-[#1a1f2e]/60"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 255, 204, 0.05)',
                  }}
                >
                  <h4 className="text-2xl font-bold text-white font-sans mb-4">{client.category}</h4>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {client.projects.map((project, pIdx) => (
                      <span key={pIdx} className="bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc] text-xs font-semibold px-4 py-2 rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-[#cbd5e1] leading-relaxed font-normal">
                    <span className="font-bold text-[#00ffcc]">Tech Highlight: </span>{client.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ============================================
// TECHNICAL ARSENAL
// ============================================
export function TechnicalArsenal() {
  const categories = [
    {
      name: 'CYBERSECURITY',
      skills: ['Network Security', 'Cryptography', 'OWASP Top 10', 'Penetration Testing'],
    },
    {
      name: 'FULL-STACK',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'SQL/NoSQL', 'PHP', 'Python'],
    },
    {
      name: 'HOSTING & CLOUD',
      skills: ['AWS', 'VPS Management', 'CI/CD Pipelines', 'Server Hardening'],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-24 px-4 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-sans"
        >
          TECHNICAL ARSENAL
        </motion.h2>
        <p className="text-center text-[#00ffcc] font-semibold text-sm mb-16 tracking-widest">
          [THE TERMINAL GRID]
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border-2 border-[#00ffcc]/40 rounded-xl p-8 bg-[#1a1f2e]/30 backdrop-blur-sm h-full hover:border-[#00ffcc]/70 transition-all duration-300"
                style={{
                  boxShadow: `0 8px 24px rgba(0, 255, 204, 0.08)`,
                }}
              >
                <h3 className="text-xl font-bold text-[#00ffcc] mb-8 font-sans tracking-wide">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-[#00ffcc]/10 to-transparent border border-[#00ffcc]/30 rounded-lg p-4 text-center text-sm font-semibold text-[#cbd5e1] hover:border-[#00ffcc]/60 hover:text-[#00ffcc] transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ============================================
// LIVE ACTIVITY WIDGET
// ============================================
export function LiveActivityWidget() {
  const [systemStatus, setSystemStatus] = useState('[SYSTEM STATUS: SECURE]');
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const messages = [
      '[SYSTEM STATUS: SECURE]',
      '[CURRENTLY CODING: SaaS Product #2]',
      '[ARCHITECTURE DESIGN: IN PROGRESS]',
      '[SECURITY AUDIT: ACTIVE]',
      '[FOUNDER MODE: ENABLED]',
    ];

    let current = 0;

    const interval = setInterval(() => {
      current = (current + 1) % messages.length;
      setSystemStatus(messages[current]);
    }, 5000);

    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-[#00ffcc]/50 rounded-lg p-4 backdrop-blur-xl shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(0, 255, 204, 0.3)',
        }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ opacity: blink ? 1 : 0.3 }}
            className="w-3 h-3 rounded-full bg-[#00ffcc]"
          />
          <p className="font-mono text-xs text-[#00ffcc] whitespace-nowrap">
            {systemStatus}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN PORTFOLIO COMPONENT
// ============================================
export default function Portfolio() {
  return (
    <div className="w-full bg-transparent text-white overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
      <HeroSection />
      <IdentityCards />
      <ProjectMatrix />
      <TechnicalArsenal />
      <LiveActivityWidget />

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-[#00ffcc]/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-normal text-base text-[#4a5568] mb-2">
            Er. Purushottam Chand Bohora © 2024
          </p>
          <p className="font-normal text-sm text-[#2d3748] tracking-normal">
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
