'use client';

import React, { useEffect, useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  Database, 
  Layers, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu,
  Monitor,
  GitBranch,
  BookOpen,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Code
} from 'lucide-react';

const terminalSequence = [
  { type: 'input', text: 'whoami' },
  { type: 'output', text: '// Helmi — Full-Stack Web Developer' },
  { type: 'input', text: 'cat stack.json' },
  { type: 'output', text: '{ "backend": "Laravel 12", "ui": "Filament 5", "db": "MySQL" }' },
  { type: 'input', text: 'echo $STATUS' },
  { type: 'output', text: 'Mahasiswa Aktif · Open to Opportunities' }
];

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom states for simulated typing in terminal window
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    // Staggered typing simulator for macOS Terminal
    if (currentLineIndex < terminalSequence.length) {
      const currentItem = terminalSequence[currentLineIndex];
      const delay = currentItem.type === 'input' ? 800 : 400;
      
      const timer = setTimeout(() => {
        setTypedLines(prev => [...prev, `${currentItem.type === 'input' ? '❯ ' : '  '}${currentItem.text}`]);
        setCurrentLineIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    // 1. Staggered reveal for Hero elements (trigger automatically)
    const heroReveals = document.querySelectorAll('#hero .reveal');
    heroReveals.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150 + 100);
    });

    // 2. Intersection Observer for elements outside Hero
    const allReveals = document.querySelectorAll('.reveal:not(#hero .reveal)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    allReveals.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="top" className="min-h-screen selection:bg-accent-teal/35 selection:text-[#0A0E1A] overflow-x-hidden">
      
      {/* 1. FIXED GLASSMORPH NAV */}
      <nav className="nav-glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="font-mono text-xl font-bold tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all">
            <span className="text-accent-orange">&lt;</span>
            <span className="text-accent-teal font-medium">helmi</span>
            <span className="text-accent-orange"> /&gt;</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-xs uppercase tracking-wider font-mono text-text-muted hover:text-accent-teal transition-colors">
              Tentang
            </a>
            <a href="#skills" className="text-xs uppercase tracking-wider font-mono text-text-muted hover:text-accent-teal transition-colors">
              Keahlian
            </a>
            <a href="#projects" className="text-xs uppercase tracking-wider font-mono text-text-muted hover:text-accent-teal transition-colors">
              Proyek
            </a>
            <a href="#contact" className="text-xs uppercase tracking-wider font-mono text-text-muted hover:text-accent-teal transition-colors">
              Kontak
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-muted hover:text-accent-teal focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bg-card font-mono border-b border-border-subtle shadow-2xl py-6 px-6 space-y-4 flex flex-col transition-all duration-300">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-text-muted hover:text-accent-teal py-2 border-b border-border-subtle"
            >
              {"// Tentang Saya"}
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-text-muted hover:text-accent-teal py-2 border-b border-border-subtle"
            >
              {"// Keahlian"}
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-text-muted hover:text-accent-teal py-2 border-b border-border-subtle"
            >
              {"// Proyek Terpilih"}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wide text-text-muted hover:text-accent-teal py-2"
            >
              {"// Hubungi Saya"}
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO PAGE (min-height 100vh) */}
      <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
        {/* Subtle Radial Gradient Accent */}
        <div className="absolute top-1/4 right-[10%] w-[320px] md:w-[500px] h-[320px] md:h-[500px] rounded-full bg-accent-teal/5 blur-[90px] md:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-[5%] w-[320px] md:w-[480px] h-[320px] md:h-[480px] rounded-full bg-accent-orange/4 blur-[90px] md:blur-[120px] pointer-events-none" />
        
        {/* Thin Gridded Background Mesh */}
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative w-full flex flex-col items-center">
          
          {/* macOS Style Terminal Window */}
          <div className="reveal w-full max-w-2xl bg-bg-card border border-border-subtle rounded-xl overflow-hidden shadow-2xl mb-12">
            
            {/* Title Bar */}
            <div className="bg-bg-subtle px-4 py-3 flex items-center justify-between border-b border-border-subtle">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block shadow-inner" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block shadow-inner" />
                <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block shadow-inner" />
              </div>
              <span className="font-mono text-xs text-text-muted tracking-tight select-none">
                helmi@portfolio ~ zsh
              </span>
              <div className="w-12" /> {/* alignment balancer */}
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed min-h-[200px] text-text-main flex flex-col justify-start">
              {/* Animated Lines container */}
              <div className="space-y-2">
                {typedLines.map((line, idx) => {
                  const isPrompt = line.trim().startsWith('❯');
                  return (
                    <div key={idx} className={isPrompt ? 'text-text-main' : 'text-text-muted'}>
                      {isPrompt ? (
                        <>
                          <span className="text-accent-teal mr-1">❯</span>
                          <span>{line.substring(2)}</span>
                        </>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  );
                })}
                
                {/* Active Typing Indicator Line */}
                {currentLineIndex < terminalSequence.length && (
                  <div className="text-text-main">
                    {terminalSequence[currentLineIndex].type === 'input' ? (
                      <span className="text-accent-teal mr-1">❯</span>
                    ) : (
                      <span className="mr-4" />
                    )}
                    <span className="inline-block w-2.5 h-4.5 bg-accent-teal animate-blink opacity-80" />
                  </div>
                )}

                {/* Final Static cursor state when everything finishes */}
                {currentLineIndex >= terminalSequence.length && (
                  <div className="text-text-main flex items-center">
                    <span className="text-accent-teal mr-1">❯</span>
                    <span className="inline-block w-2 h-4 bg-accent-teal animate-blink" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Typographic Headline */}
          <div className="reveal text-center max-w-3xl mb-6">
            <h1 
              className="font-serif font-black tracking-tight leading-[1.1] text-text-main text-center balance"
              style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)' }}
            >
              Membangun aplikasi web <br />
              yang <span className="text-accent-teal relative inline-block after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-accent-teal/20">berdampak</span> &amp; <br className="hidden sm:inline" />
              <span className="text-accent-orange">skalabel.</span>
            </h1>
          </div>

          {/* Subtitle description */}
          <p className="reveal text-center text-text-muted max-w-xl text-base md:text-lg font-sans leading-relaxed mb-10">
            Mahasiswa yang berspesialisasi dalam ekosistem Laravel — dari database relasional hingga dashboard admin yang bersih.
          </p>

          {/* CTA Buttons */}
          <div className="reveal flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-accent-teal text-bg-primary font-sans font-semibold tracking-wide text-sm text-center shadow-lg shadow-accent-teal/15 hover:shadow-accent-teal/30 hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Proyek
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-border-subtle text-text-main font-sans font-medium text-sm text-center hover:border-accent-teal hover:bg-accent-teal/5 transition-all duration-300"
            >
              Hubungi Saya
            </a>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 bg-bg-subtle border-y border-border-subtle relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Self Reflection Bio */}
            <div className="reveal lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-teal block">
                — Tentang Saya
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-main leading-tight">
                Seorang developer yang suka detail.
              </h2>
              
              {/* Custom horizontal gradient divider bar */}
              <div className="w-10 h-[3px] rounded bg-gradient-to-r from-accent-teal to-accent-orange mb-6" />

              <div className="space-y-5 font-sans text-[#CDDEE9] text-base md:text-[1.05rem] leading-relaxed">
                <p>
                  Saya <strong className="text-text-main font-semibold">Helmi</strong>, mahasiswa yang fokus membangun aplikasi web full-stack menggunakan ekosistem Laravel. Saya percaya bahwa kode yang baik bukan hanya yang bekerja, tapi yang mudah dipahami dan dipelihara.
                </p>
                <p>
                  Proyek akhir saya, <strong className="text-accent-teal font-medium">OutdoorRent</strong>, adalah sistem penyewaan perlengkapan outdoor berbasis web — dibangun dengan Laravel 12, Filament 5, dan MySQL lengkap dengan manajemen role via Spatie Permission.
                </p>
                <p>
                  Di samping coding, saya memiliki ketertarikan kuat pada bidang <strong className="text-accent-orange font-medium">UI/UX Design</strong> untuk merancang antarmuka yang intuitif dan fungsional. Saya juga mendalami arsitektur database yang solid — mulai dari view, trigger, stored procedure, hingga privilege management.
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle/40">
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-accent-orange" />
                  Pendidikan
                </h4>
                
                <div className="relative border-l border-border-subtle/40 ml-3 pl-5 space-y-5">
                  {/* SD */}
                  <div className="relative group">
                    <span className="absolute -left-[25.5px] top-2 flex h-2 w-2 rounded-full bg-bg-primary border border-accent-teal/50 group-hover:border-accent-teal transition-colors duration-300" />
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-0.5 rounded bg-accent-teal/5 text-text-muted/70 font-mono text-[10px] shrink-0 select-none">
                        &gt;_
                      </div>
                      <div>
                        <h5 className="font-sans font-semibold text-text-main text-sm">SD Kebon Pedes 3</h5>
                      </div>
                    </div>
                  </div>

                  {/* SMP */}
                  <div className="relative group">
                    <span className="absolute -left-[25.5px] top-2 flex h-2 w-2 rounded-full bg-bg-primary border border-accent-teal/50 group-hover:border-accent-teal transition-colors duration-300" />
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-0.5 rounded bg-accent-teal/5 text-text-muted/70 font-mono text-[10px] shrink-0 select-none">
                        &gt;_
                      </div>
                      <div>
                        <h5 className="font-sans font-semibold text-text-main text-sm">SMPN 3 Cibinong</h5>
                      </div>
                    </div>
                  </div>

                  {/* SMK */}
                  <div className="relative group">
                    <span className="absolute -left-[25.5px] top-2 flex h-2 w-2 rounded-full bg-bg-primary border border-accent-teal/50 group-hover:border-accent-teal transition-colors duration-300" />
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-0.5 rounded bg-accent-teal/10 text-accent-teal font-mono text-[10px] font-bold shrink-0">
                        2024
                      </div>
                      <div>
                        <h5 className="font-sans font-semibold text-text-main text-sm">SMK BOASH</h5>
                      </div>
                    </div>
                  </div>

                  {/* STT Terpadu Nurul Fikri */}
                  <div className="relative group">
                    <span className="absolute -left-[27.5px] top-2 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange/30 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-orange border border-bg-primary" />
                    </span>
                    <div className="bg-bg-card/40 border border-border-subtle/50 rounded-xl p-4 flex items-start gap-3 hover:border-accent-orange/30 transition-all duration-300">
                      <div className="px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange font-mono text-[10px] font-bold shrink-0">
                        2025
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h5 className="font-sans font-semibold text-text-main text-sm">STT Terpadu Nurul Fikri, Bogor</h5>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-accent-orange bg-accent-orange/10 border border-accent-orange/20 px-2 py-0.5 rounded font-semibold">
                            Sedang Ditempuh
                          </span>
                        </div>
                        <p className="font-sans text-xs text-[#AECCD9]">Informatika (2025 — Sekarang)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Grid of Stat Cards */}
            <div className="reveal lg:col-span-5 grid grid-cols-2 gap-4 w-full lg:pt-8">
              
              {/* Stat 1 */}
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6 transition-all duration-300 hover:border-accent-teal/35 group hover:bg-[#111c2e]">
                <div className="font-serif text-3xl md:text-4xl font-extrabold text-accent-teal mb-2 group-hover:scale-105 transition-transform duration-300">
                  9+
                </div>
                <div className="font-sans text-xs md:text-sm text-text-muted leading-snug">
                  Tabel Database Terstruktur
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6 transition-all duration-300 hover:border-accent-teal/35 group hover:bg-[#111c2e]">
                <div className="font-serif text-3xl md:text-4xl font-extrabold text-accent-teal mb-2 group-hover:scale-105 transition-transform duration-300">
                  3
                </div>
                <div className="font-sans text-xs md:text-sm text-text-muted leading-snug">
                  Role Pengguna Sistem
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6 transition-all duration-300 hover:border-accent-teal/35 group hover:bg-[#111c2e]">
                <div className="font-serif text-3xl md:text-4xl font-extrabold text-accent-teal mb-2 group-hover:scale-105 transition-transform duration-300">
                  4+
                </div>
                <div className="font-sans text-xs md:text-sm text-text-muted leading-snug">
                  Dashboard Widget
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6 transition-all duration-300 hover:border-accent-teal/35 group hover:bg-[#111c2e]">
                <div className="font-serif text-3xl md:text-4xl font-extrabold text-accent-teal mb-2 group-hover:scale-105 transition-transform duration-300">
                  4+
                </div>
                <div className="font-sans text-xs md:text-sm text-text-muted leading-snug">
                  Proyek Kompleks Selesai
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="reveal space-y-4 mb-16 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-teal block">
              — Keahlian
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main">
              Kemampuan Teknis
            </h2>
            <div className="w-10 h-[3px] rounded bg-gradient-to-r from-accent-teal to-accent-orange" />
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Skill Group 1: Backend */}
            <div className="reveal bg-bg-card border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:border-accent-teal/35 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-orange/10 text-accent-orange group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-text-main">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Laravel 12</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">PHP</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">REST API</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Eloquent ORM</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Artisan CLI</span>
              </div>
            </div>

            {/* Skill Group 2: Admin Panel */}
            <div className="reveal bg-bg-card border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:border-accent-teal/35 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-orange/10 text-accent-orange group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-text-main">Admin Panel</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Filament 5</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Spatie Permission</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Resource Builder</span>
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Widgets</span>
              </div>
            </div>

            {/* Skill Group 3: Database */}
            <div className="reveal bg-bg-card border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:border-accent-teal/35 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-teal/10 text-accent-teal group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-text-main">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-accent-teal/12 text-accent-teal border border-accent-teal/15 rounded-full text-xs font-mono font-medium">MySQL</span>
                <span className="px-3 py-1 bg-accent-teal/12 text-accent-teal border border-accent-teal/15 rounded-full text-xs font-mono font-medium">Stored Procedure</span>
                <span className="px-3 py-1 bg-accent-teal/12 text-accent-teal border border-accent-teal/15 rounded-full text-xs font-mono font-medium">Trigger</span>
                <span className="px-3 py-1 bg-accent-teal/12 text-accent-teal border border-accent-teal/15 rounded-full text-xs font-mono font-medium">View</span>
                <span className="px-3 py-1 bg-accent-teal/12 text-accent-teal border border-accent-teal/15 rounded-full text-xs font-mono font-medium">User Privilege</span>
              </div>
            </div>

            {/* Skill Group 4: Frontend */}
            <div className="reveal bg-bg-card border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:border-accent-teal/35 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-text-muted/10 text-text-muted group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-text-main">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">HTML/CSS</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">Alpine.js</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">Blade</span>
              </div>
            </div>

            {/* Skill Group 5: Integrasi */}
            <div className="reveal bg-bg-card border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:border-accent-teal/35 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent-teal/5 text-text-muted group-hover:scale-110 transition-transform duration-300">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-text-main">Integrasi</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-accent-orange/12 text-accent-orange border border-accent-orange/15 rounded-full text-xs font-mono font-medium">Midtrans</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">Git/GitHub</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">Composer</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">NPM</span>
              </div>
            </div>

            {/* Skill Group 6: Konsep */}
            <div className="reveal bg-bg-card border border-border-subtle rounded-xl p-6 hover:-translate-y-1 hover:border-accent-teal/35 transition-all duration-300 relative group overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-text-muted/10 text-text-muted group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-text-main">Konsep</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">MVC Pattern</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">RBAC</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">Database Design</span>
                <span className="px-3 py-1 bg-text-muted/12 text-text-muted border border-text-muted/15 rounded-full text-xs font-mono font-medium">UI/UX Dasar</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-bg-subtle border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="reveal space-y-4 mb-16 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-teal block">
              — Galeri Proyek
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main">
              Pekerjaan Terpilih
            </h2>
            <div className="w-10 h-[3px] rounded bg-gradient-to-r from-accent-teal to-accent-orange" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* Project 1: EventHub Kampus */}
            <div className="reveal group card-hover-border bg-bg-card border border-border-subtle rounded-2xl flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-accent-teal/5 transition-all duration-300">
              
              <div className="p-6 md:p-8 space-y-4">
                {/* Visual marker / Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl" role="img" aria-label="ticket icon">🎟️</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-accent-teal bg-accent-teal/10 px-2 py-0.5 rounded">
                    Web Platform
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-text-main group-hover:text-accent-teal transition-colors">
                  EventHub Kampus
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-[#AECCD9] leading-relaxed">
                  Platform manajemen event kampus berbasis Next.js untuk Universitas Nurul Fikri, dengan dashboard multi-role (mahasiswa, panitia, PO, staf kemahasiswaan), presensi via QR code, generate sertifikat digital otomatis, dan alur persetujuan anggaran (RAB) bertingkat.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-mono font-semibold text-accent-teal">Next.js</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono font-semibold text-accent-teal">React</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">Tailwind CSS</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">html5-qrcode</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">jsPDF</span>
                </div>
              </div>

              {/* Links Footer */}
              <div className="p-6 md:p-8 bg-bg-subtle border-t border-border-subtle/40 flex items-center justify-between">
                <a 
                  href="https://github.com/wiratahelmi469-web1/prototipe" 
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-accent-teal flex items-center space-x-1.5 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://prototipe-one.vercel.app" 
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-accent-orange flex items-center space-x-1.5 hover:underline"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>

            </div>

            {/* Project 2: OutdoorRent */}
            <div className="reveal group card-hover-border bg-bg-card border border-border-subtle rounded-2xl flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-accent-teal/5 transition-all duration-300">
              
              <div className="p-6 md:p-8 space-y-4">
                {/* Visual marker / Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl" role="img" aria-label="outdoor icon">🏕️</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-accent-orange bg-accent-orange/10 px-2 py-0.5 rounded">
                    Featured Project
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-text-main group-hover:text-accent-teal transition-colors">
                  OutdoorRent
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-[#AECCD9] leading-relaxed">
                  Sistem penyewaan perlengkapan outdoor berbasis web. Dilengkapi manajemen stok, pembayaran via Midtrans, tiga role pengguna (super_admin, admin, customer), dan dashboard analytics.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-mono font-semibold text-accent-teal">Laravel 12</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono font-semibold text-accent-orange">Filament 5</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">MySQL</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">Spatie</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">Midtrans</span>
                </div>
              </div>

              {/* Links Footer */}
              <div className="p-6 md:p-8 bg-bg-subtle border-t border-border-subtle/40 flex items-center justify-between">
                <a 
                  href="https://github.com/wiratahelmi469-web1/OutdoorRent" 
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-accent-teal flex items-center space-x-1.5 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                
                <span className="font-mono text-xs text-accent-orange/80 flex items-center space-x-1.5 bg-accent-orange/10 px-2.5 py-1 rounded border border-accent-orange/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
                  <span>In Development</span>
                </span>
              </div>

            </div>

            {/* Project 3: Basis Data */}
            <div className="reveal group card-hover-border bg-bg-card border border-border-subtle rounded-2xl flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-accent-teal/5 transition-all duration-300">
              
              <div className="p-6 md:p-8 space-y-4">
                {/* Visual marker */}
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl" role="img" aria-label="database icon">🗄️</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#B0D3FB] bg-[#B0D3FB]/10 px-2 py-0.5 rounded">
                    Relational DB
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-text-main group-hover:text-accent-teal transition-colors">
                  Basis Data — peminjaman_outdoor
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-[#AECCD9] leading-relaxed">
                  Implementasi database relasional murni untuk studi kasus penyewaan outdoor. Mencakup tiga view, tiga stored procedure, empat trigger (AFTER UPDATE, BEFORE INSERT, AFTER INSERT), dan dua user MySQL dengan privilege terpisah.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-mono font-semibold text-accent-teal">MySQL</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono font-semibold text-accent-teal">Trigger</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono font-semibold text-accent-teal">Stored Procedure</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">View</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">DDL/DML</span>
                </div>
              </div>

              {/* Links Footer */}
              <div className="p-6 md:p-8 bg-bg-subtle border-t border-border-subtle/40 flex items-center justify-start">
                <a 
                  href="https://github.com/wiratahelmi469-web1" 
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-accent-teal flex items-center space-x-1.5 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>

            {/* Project 4: Portofolio */}
            <div className="reveal group card-hover-border bg-bg-card border border-border-subtle rounded-2xl flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-accent-teal/5 transition-all duration-300">
              
              <div className="p-6 md:p-8 space-y-4">
                {/* Visual marker */}
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl" role="img" aria-label="web icon">🌐</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00D4AA] bg-[#00D4AA]/10 px-2 py-0.5 rounded">
                    Web static
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-text-main group-hover:text-accent-teal transition-colors">
                  Portofolio Helmi
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-[#AECCD9] leading-relaxed">
                  Website portofolio statis yang di-deploy di Vercel. Dibangun dengan HTML, CSS, dan JavaScript vanilla — tanpa framework, load cepat, sepenuhnya responsif.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-mono text-text-muted">HTML</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">CSS</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono text-text-muted">JavaScript</span>
                  <span className="text-[#6B8FAB] text-[11px] font-mono">•</span>
                  <span className="text-[11px] font-mono font-semibold text-accent-orange">Vercel</span>
                </div>
              </div>

              {/* Links Footer */}
              <div className="p-6 md:p-8 bg-bg-subtle border-t border-border-subtle/40 flex items-center justify-between">
                <a 
                  href="https://github.com/wiratahelmi469-web1/portfolio" 
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-accent-teal flex items-center space-x-1.5 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
                
                <a 
                  href="#top" 
                  className="font-mono text-xs font-medium text-accent-teal flex items-center space-x-1.5 hover:underline"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Live Site</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
        {/* Decorative Grid Line Segment */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent-teal/15 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative w-full flex flex-col items-center text-center">
          
          <span className="font-mono text-xs uppercase tracking-wider text-accent-teal block mb-3 reveal">
            — Penghubung
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-6 reveal">
            Mari berkolaborasi.
          </h2>
          
          <div className="w-10 h-[3px] rounded bg-gradient-to-r from-accent-teal to-accent-orange mb-12 reveal" />

          {/* Centralized Card */}
          <div className="reveal w-full max-w-[540px] bg-bg-card border border-border-subtle rounded-2xl p-8 md:p-10 shadow-2xl space-y-8">
            <p className="font-sans text-base text-[#CDDEE9] leading-relaxed">
              Tertarik berkolaborasi atau ingin berdiskusi tentang proyek? Jangan ragu untuk menghubungi saya.
            </p>

            {/* Practical Contact links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              {/* Mail */}
              <a 
                href="mailto:wiratahelmi469@gmail.com" 
                className="w-full sm:w-auto px-5 py-3 rounded-lg border border-border-subtle hover:border-accent-teal hover:text-accent-teal font-mono text-xs flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-accent-teal" />
                <span>Email Saya</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/wiratahelmi469-web1" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-lg border border-border-subtle hover:border-accent-teal hover:text-accent-teal font-mono text-xs flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Github className="w-4 h-4 text-accent-orange" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/wiratahelmi469" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-lg border border-border-subtle hover:border-accent-teal hover:text-accent-teal font-mono text-xs flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-[#D3ECF8]" />
                <span>LinkedIn</span>
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-8 bg-bg-primary border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 font-mono text-xs text-text-muted">
            <span>Dibuat dengan</span>
            <span className="text-accent-teal inline-block animate-pulse">♥</span>
            <span>oleh Helmi · 2025</span>
          </div>
          <div className="font-mono text-[10px] text-text-muted/60">
            Deployed dynamically via Google AI Studio
          </div>
        </div>
      </footer>

    </div>
  );
}
