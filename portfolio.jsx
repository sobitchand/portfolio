'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// ============================================
// HERO SECTION
// ============================================
export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1419] to-[#0a0e27] flex items-center justify-center px-4 pt-20 pb-20 overflow-hidden"
    >
      {/* Animated background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-32 left-0 right-0 z-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono tracking-tighter">
          Er. Purushottam Chand Bohora
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#00ffcc]" />
          <h2 className="text-lg md:text-xl text-[#00ffcc] font-mono font-semibold tracking-widest">
            FOUNDER & TECH ARCHITECT
          </h2>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#00ffcc]" />
        </div>

        <p className="text-xl md:text-2xl text-[#00ff88] font-mono font-light tracking-wide">
          Securing the Web. Building the Future of SaaS.
        </p>
      </motion.div>

      {/* Split Screen Layout */}
      <div className="relative w-full max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 w-full md:w-auto flex justify-center"
        >
          {/* Glow effect behind portrait */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(0, 255, 204, 0.3)',
                '0 0 60px rgba(0, 255, 204, 0.4)',
                '0 0 40px rgba(0, 255, 204, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10"
          >
            {/* Circular neon border container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-[#00ffcc] p-2 bg-gradient-to-br from-[#00ffcc]/10 via-transparent to-[#00ff88]/10 backdrop-blur-xl shadow-2xl"
              style={{
                boxShadow: '0 0 50px rgba(0, 255, 204, 0.4), inset 0 0 40px rgba(0, 255, 204, 0.1)',
              }}
            >
              {/* Inner glow ring */}
              <div className="absolute inset-0 rounded-full border border-[#00ff88]/30 m-1" />

              {/* Portrait image */}
              <img
                src="/api/placeholder?width=320&height=320"
                alt="Er. Purushottam Chand Bohora"
                className="w-full h-full rounded-full object-cover filter brightness-110 contrast-125"
              />

              {/* Corner accent indicators */}
              <div className="absolute top-2 right-2 w-3 h-3 border-l-2 border-t-2 border-[#00ffcc]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-r-2 border-b-2 border-[#00ffcc]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Philosophy & Description */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full flex flex-col justify-center space-y-8"
        >
          {/* Philosophy Section */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-[#00ffcc] font-mono leading-tight">
              Self-Trust Wins Wars
            </h3>
            <p className="text-lg md:text-xl text-[#a0aec0] font-light leading-relaxed">
              Strategy beats effort. Consistency completes what you've started.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00ffcc] to-[#00ff88]" />
          </div>

          {/* Main Description */}
          <p className="text-sm md:text-base text-[#a0aec0] leading-relaxed font-light">
            I am an Engineer, Full-Stack Developer, and Cybersecurity specialist dedicated to building 
            impenetrable, high-performance digital ecosystems. As a founder and CTO, I bridge the gap 
            between complex cryptographic security and scalable business architecture. 
          </p>

          <p className="text-sm md:text-base text-[#00ff88] font-mono font-light tracking-wide">
            Welcome to my terminal.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 204, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#00ffcc] text-[#0a0e27] font-mono font-bold rounded-sm hover:bg-[#00ff88] transition-all duration-300"
            >
              &gt; EXPLORE VENTURES
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 204, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#00ffcc] text-[#00ffcc] font-mono font-bold rounded-sm hover:bg-[#00ffcc]/5 transition-all duration-300"
            >
              &gt; VIEW PROJECTS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// THE TRIPLE THREAT (Identity Cards)
// ============================================
export function IdentityCards() {
  const cards = [
    {
      title: 'Defensive & Offensive Security',
      description: 'Hardening systems, vulnerability management, secure code deployment, and robust cryptography.',
      icon: '🛡️',
      accentColor: 'from-[#00ffcc]',
    },
    {
      title: 'Full-Stack & Architecture',
      description: 'Designing scalable backend logic, intuitive user interfaces, and seamless hosting/cloud infrastructure optimization.',
      icon: '⚙️',
      accentColor: 'from-[#00ff88]',
    },
    {
      title: 'Market Strategy & Leadership',
      description: 'Comprehensive competitor analysis, client negotiation, and steering tech startups from ideation to deployment.',
      icon: '🎯',
      accentColor: 'from-[#00ffcc]',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-4 bg-gradient-to-b from-[#0a0e27] to-[#0f1419]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-mono"
        >
          THE CORE IDENTITY
        </motion.h2>
        <p className="text-center text-[#00ffcc] font-mono text-sm mb-16 tracking-widest">
          [THE TRIPLE THREAT]
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: `0 0 30px rgba(0, 255, 204, 0.3)` }}
              className="group relative h-full"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-lg border border-[#00ffcc]/30 p-6 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(0, 255, 204, 0.1)',
                }}
              />
              <div className="relative bg-gradient-to-br from-[#1a1f2e]/80 to-[#0f1419]/80 border border-[#00ffcc]/20 rounded-lg p-6 backdrop-blur-md h-full flex flex-col hover:border-[#00ffcc]/50 transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(0, 255, 204, 0.1)',
                }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-[#00ffcc] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#a0aec0] leading-relaxed flex-grow">
                  {card.description}
                </p>
                <div className={`h-1 w-12 bg-gradient-to-r ${card.accentColor} to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ============================================
// THE LIVE MATRIX (Projects & Ventures)
// ============================================
export function ProjectMatrix() {
  const ventures = [
    {
      name: 'Tech Break',
      tag: 'Co-Founder & CTO',
      tagColor: 'bg-[#00ffcc]',
      description: 'Leading the technical vision, architecture, and security protocols to disrupt the standard tech learning/consulting landscape.',
    },
    {
      name: 'Chiya Ko Ghar',
      tag: 'Strategic Digital Partner',
      tagColor: 'bg-[#00ff88]',
      description: 'Spearheading the complete digital transformation, local market penetration strategy, and tech integration for a rising brand.',
    },
    {
      name: '3x Stealth SaaS Products',
      tag: 'IN DEVELOPMENT / BETA',
      tagColor: 'bg-[#ff00ff]/50',
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
      className="relative py-20 px-4 bg-gradient-to-b from-[#0f1419] to-[#0a0e27]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-mono"
        >
          THE LIVE MATRIX
        </motion.h2>
        <p className="text-center text-[#00ffcc] font-mono text-sm mb-16 tracking-widest">
          [PROJECTS & VENTURES DASHBOARD]
        </p>

        {/* Venture Portfolio */}
        <div className="mb-16">
          <h3 className="text-lg font-mono text-[#00ffcc] mb-8 border-b border-[#00ffcc]/30 pb-3 tracking-widest">
            A. VENTURE PORTFOLIO
          </h3>
          <div className="space-y-4">
            {ventures.map((venture, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-r from-[#1a1f2e]/60 to-transparent border border-[#00ffcc]/20 rounded-lg p-6 hover:border-[#00ffcc]/50 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.05)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h4 className="text-xl font-bold text-white font-mono">{venture.name}</h4>
                    <span className={`${venture.tagColor} text-[#0a0e27] font-mono font-bold text-xs px-3 py-1 rounded-full w-fit`}>
                      {venture.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#a0aec0] leading-relaxed">{venture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Ecosystems */}
        <div>
          <h3 className="text-lg font-mono text-[#00ffcc] mb-8 border-b border-[#00ffcc]/30 pb-3 tracking-widest">
            B. CLIENT ECOSYSTEMS
          </h3>
          <div className="space-y-4">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-[#1a1f2e]/60 to-transparent border border-[#00ffcc]/20 rounded-lg p-6 hover:border-[#00ffcc]/50 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.05)',
                  }}
                >
                  <h4 className="text-xl font-bold text-white font-mono mb-4">{client.category}</h4>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {client.projects.map((project, pIdx) => (
                      <span key={pIdx} className="bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc] text-xs font-mono px-3 py-1 rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#a0aec0] leading-relaxed">
                    <span className="font-bold text-[#00ffcc]">Tech Highlight:</span> {client.highlight}
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
      color: 'border-[#00ffcc]',
      skills: ['Network Security', 'Cryptography', 'OWASP Top 10', 'Penetration Testing'],
    },
    {
      name: 'FULL-STACK',
      color: 'border-[#00ff88]',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'SQL/NoSQL'],
    },
    {
      name: 'HOSTING & CLOUD',
      color: 'border-[#00ffcc]',
      skills: ['AWS', 'VPS Management', 'CI/CD Pipelines', 'Server Hardening'],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-4 bg-gradient-to-b from-[#0a0e27] to-[#0f1419]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-mono"
        >
          TECHNICAL ARSENAL
        </motion.h2>
        <p className="text-center text-[#00ffcc] font-mono text-sm mb-16 tracking-widest">
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
              <div className={`border-2 ${category.color} rounded-lg p-6 bg-[#1a1f2e]/40 backdrop-blur-sm h-full`}
                style={{
                  boxShadow: `0 0 20px rgba(0, 255, 204, 0.1)`,
                }}
              >
                <h3 className={`text-lg font-mono font-bold mb-6 ${category.color.replace('border', 'text')} tracking-widest`}>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br from-[#00ffcc]/10 to-transparent border ${category.color}/30 rounded-sm p-3 text-center text-sm font-mono text-[#a0aec0] hover:border-[#00ffcc]/60 hover:text-[#00ffcc] transition-all cursor-pointer group`}
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
    <div className="w-full bg-[#0a0e27] text-white overflow-hidden">
      <HeroSection />
      <IdentityCards />
      <ProjectMatrix />
      <TechnicalArsenal />
      <LiveActivityWidget />

      {/* Footer */}
      <footer className="bg-[#0f1419] border-t border-[#00ffcc]/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-sm text-[#4a5568] mb-2">
            Er. Purushottam Chand Bohora © 2024
          </p>
          <p className="font-mono text-xs text-[#2d3748] tracking-widest">
            [COMMAND CENTER TERMINATED]
          </p>
        </div>
      </footer>
    </div>
  );
}
