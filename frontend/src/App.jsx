import { useState } from 'react'

const App = () => {
  const [lang, setLang] = useState('tr')

  const t = {
    tr: {
      nav: ["Deneyim", "Projeler", "Yetenekler"],
      heroTitle: "Sistemleri estetik ve güçle harmanlıyorum.",
      heroDesc: "Konya Teknik Üniversitesi mezunu bir mühendis olarak, modern web ve mobil mimarileri üzerine profesyonel çözümler üretiyorum.",
      heroStatus: "YENİ PROJELER İÇİN MÜSAİT",
      buttons: ["Projeleri Keşfet", "İletişime Geç", "CV İNDİR"],
      expTitle: "Deneyim (Stajlar)",
      zenopixRole: "Full Stack Geliştirme Stajyeri",
      zenopixDesc: "React, Spring Framework ve PostgreSQL kullanarak kurumsal e-ticaret platformu geliştirme.",
      daimiaRole: "Mobil Uygulama Geliştirme Stajyeri",
      daimiaDesc: "Flutter ile AI tabanlı 3D model oluşturma uygulaması geliştirme ve Firebase entegrasyonu.",
      projTitle: "Önemli Projeler",
      robotTitle: "Otonom Yük Taşıma Robotu",
      robotDesc: "Python ve ROS ile mapping, obstacle avoidance ve görüntü işleme algoritmaları.",
      chainTitle: "Blokzinciri Tedarik Zinciri",
      chainDesc: "Solidity ile akıllı kontratlar ve Flutter entegrasyonu.",
      skillsTitle: "Teknik Yetkinlikler"
    },
    en: {
      nav: ["Experience", "Projects", "Skills"],
      heroTitle: "Blending systems with aesthetics and power.",
      heroDesc: "As a Software Engineering graduate from Konya Technical University, I build professional solutions for modern web and mobile architectures.",
      heroStatus: "AVAILABLE FOR NEW PROJECTS",
      buttons: ["Explore Projects", "Contact Me", "DOWNLOAD CV"],
      expTitle: "Experience (Internships)",
      zenopixRole: "Full Stack Development Intern",
      zenopixDesc: "Engineering a full-stack e-commerce platform utilizing React, Spring Framework, and PostgreSQL.",
      daimiaRole: "Mobile Application Intern",
      daimiaDesc: "Developed an AI-powered 3D model generation mobile app using Flutter and Firebase.",
      projTitle: "Featured Projects",
      robotTitle: "Autonomous Transport Robot",
      robotDesc: "Developed algorithms using Python and ROS for mapping, obstacle avoidance, and computer vision.",
      chainTitle: "Blockchain Supply Chain",
      chainDesc: "Designed smart contracts using Solidity integrated with a Flutter mobile app.",
      skillsTitle: "Technical Expertise"
    }
  }

  const content = t[lang]

  return (
    <div className="min-h-screen bg-refined-mesh text-slate-300 selection:bg-secondary/20">
      
      {/* NAVİGASYON */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.03] bg-background/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="text-lg font-black tracking-[0.2em] text-white">SGT.DEV</div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
            <a href="#experience" className="hover:text-primary transition-colors">{content.nav[0]}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{content.nav[1]}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{content.nav[2]}</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              {content.buttons[2]}
            </button>
            <button 
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="px-4 py-2 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-secondary/20"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-56 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-secondary font-mono text-sm mb-6 tracking-tight">Software Engineer</p>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-10 leading-[0.85]">
            {content.heroTitle.split(' ').map((word, i) => 
              word === 'estetik' || word === 'aesthetics' ? <span key={i} className="text-primary italic"> {word} </span> : word + ' '
            )}
          </h1>
          <p className="max-w-xl text-lg text-slate-500 leading-relaxed mb-12">
            {content.heroDesc}
          </p>
          <div className="flex gap-6">
            <button className="h-14 px-10 bg-secondary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-2xl shadow-secondary/20">
              {content.buttons[0]}
            </button>
            {/* E-posta yönlendirmesi buraya eklendi */}
            <a 
              href="mailto:seydagultopal0@gmail.com"
              className="h-14 px-10 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center"
            >
              {content.buttons[1]}
            </a>
          </div>
        </div>
      </section>

      {/* DENEYİM BÖLÜMÜ */}
      <section id="experience" className="py-24 px-8 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-white mb-12 italic">{content.expTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 rounded-[3rem] glass-card">
            <h3 className="text-2xl font-bold text-white mb-2">Zenopix</h3>
            <p className="text-secondary text-xs font-bold mb-6 tracking-widest uppercase">{content.zenopixRole}</p>
            <p className="text-slate-400 leading-relaxed text-sm">{content.zenopixDesc}</p>
          </div>
          <div className="p-10 rounded-[3rem] glass-card">
            <h3 className="text-2xl font-bold text-white mb-2">DAIMIA Engineering</h3>
            <p className="text-secondary text-xs font-bold mb-6 tracking-widest uppercase">{content.daimiaRole}</p>
            <p className="text-slate-400 leading-relaxed text-sm">{content.daimiaDesc}</p>
          </div>
        </div>
      </section>

      {/* PROJELER BÖLÜMÜ */}
      <section id="projects" className="py-24 px-8 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-white mb-12 italic">{content.projTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/[0.05]">
            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Teknofest 2024</span>
            <h3 className="text-4xl font-bold text-white mb-6">{content.robotTitle}</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{content.robotDesc}</p>
          </div>
          <div className="md:col-span-4 p-10 rounded-[3.5rem] glass-card flex flex-col justify-end">
            <h3 className="text-xl font-bold text-white mb-4">{content.chainTitle}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{content.chainDesc}</p>
            <div className="text-3xl">⛓️</div>
          </div>
        </div>
      </section>

      {/* YETENEKLER BÖLÜMÜ */}
      <section id="skills" className="py-24 px-8 max-w-6xl mx-auto scroll-mt-24">
        <div className="p-16 rounded-[4rem] glass-card text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[120px]"></div>
          <h2 className="text-4xl font-bold text-white mb-12 relative z-10">{content.skillsTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {['Java (Advanced)', 'PostgreSQL (Advanced)', 'C/C++ (Advanced)', 'Spring', 'React', 'Flutter', 'ROS1', 'Python'].map(skill => (
              <span key={skill} className="px-8 py-3 rounded-2xl bg-white/5 border border-white/5 text-xs font-bold text-primary uppercase tracking-widest hover:border-primary/40 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/[0.03]">
        <p className="text-slate-600 text-[10px] tracking-[0.5em] uppercase">Şeyda Gül Topal — Software Engineer</p>
      </footer>
    </div>
  )
}

export default App