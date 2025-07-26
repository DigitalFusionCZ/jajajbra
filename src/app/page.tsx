'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "VŠE PRO STAVBY.CZ";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4299E1" /><stop offset="100%" stop-color="#3182CE" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-blue-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-wide">
            VŠE PRO STAVBY.CZ
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-blue-200 transition-colors duration-200">Služby</a>
            <a href="#projects" className="text-white hover:text-blue-200 transition-colors duration-200">Projekty</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-200">Kontakt</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-700`}>
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#services" onClick={toggleMenu} className="text-white text-lg hover:text-blue-200 transition-colors duration-200">Služby</a>
            <a href="#projects" onClick={toggleMenu} className="text-white text-lg hover:text-blue-200 transition-colors duration-200">Projekty</a>
            <a href="#contact" onClick={toggleMenu} className="text-white text-lg hover:text-blue-200 transition-colors duration-200">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative bg-blue-500 py-20 md:py-32 overflow-hidden flex items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/banner.jpg" 
              alt="Moderní stavba a rekonstrukce budovy"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="opacity-30"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Vše Pro Stavby.cz
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
              Váš spolehlivý partner pro komplexní stavební řešení. 
              Od návrhu po realizaci, s důrazem na kvalitu a inovaci.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Poptat služby
            </a>
          </div>
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Naše Služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Rekonstrukce budov</h3>
                <p className="text-gray-700 leading-relaxed">Kompletní rekonstrukce bytových i nebytových prostor, včetně modernizace a zateplení.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Zateplování fasád</h3>
                <p className="text-gray-700 leading-relaxed">Profesionální zateplování fasád pro úsporu energie a prodloužení životnosti objektu.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nové stavby</h3>
                <p className="text-gray-700 leading-relaxed">Realizace nových staveb od základů po střechu, s důrazem na moderní materiály a postupy.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Inženýrské sítě</h3>
                <p className="text-gray-700 leading-relaxed">Výstavba a oprava inženýrských sítí - voda, kanalizace, elektroinstalace.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Zemní práce a základy</h3>
                <p className="text-gray-700 leading-relaxed">Kompletní zemní práce, výkopy a realizace základových desek.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Výstavba komunikací</h3>
                <p className="text-gray-700 leading-relaxed">Realizace a údržba příjezdových cest, chodníků a menších komunikací.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">O Nás</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Společnost VŠE PRO STAVBY.CZ je dynamická stavební firma s dlouholetými zkušenostmi v oboru. 
              Specializujeme se na komplexní stavební služby od drobných úprav po rozsáhlé rekonstrukce a novostavby. 
              Naším cílem je poskytovat vysoce kvalitní služby, spolehlivost a individuální přístup ke každému klientovi.
              Zakládáme si na transparentnosti, dodržování termínů a férových cenách. 
              Věříme, že spokojenost zákazníka je náš největší úspěch.
            </p>
          </div>
        </section>

        <section id="projects" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Naše Projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:translate-y-[-5px] transition-transform duration-300">
                <Image
                  src="/images/gallery-tanvald-project.jpg"
                  alt="Projekt rekonstrukce v Tanvaldu"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className="w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-2">Projekt Tanvald</h3>
                  <p className="text-gray-700">Kompletní rekonstrukce rodinného domu, včetně zateplení fasády a interiérových úprav.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:translate-y-[-5px] transition-transform duration-300">
                <Image
                  src="/images/project-rdpo-reconstruction.jpg"
                  alt="Rekonstrukce RDPO"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className="w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-2">Rekonstrukce RDPO</h3>
                  <p className="text-gray-700">Rozsáhlá rekonstrukce bytového objektu se zaměřením na energetickou efektivitu a moderní design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Kontaktujte Nás</h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-12">
              <div className="bg-blue-600 text-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
                <h3 className="text-2xl font-semibold mb-4">VŠE PRO STAVBY.CZ</h3>
                <p className="text-lg mb-2">
                  <svg className="inline w-5 h-5 mr-2 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m18 0s-9 9-9 9-9-9-9-9"></path></svg>
                  info@vseprostavby.cz
                </p>
                <p className="text-lg mb-2">
                  <svg className="inline w-5 h-5 mr-2 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +420 732 201 101
                </p>
                <p className="text-lg">
                  <svg className="inline w-5 h-5 mr-2 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657M17.657 16.657A8 8 0 1118.9 7.95M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Přední 1162, 468 51 Smržovka
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} VŠE PRO STAVBY.CZ Všechna práva vyhrazena.
          <p className="mt-2 text-gray-400">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
