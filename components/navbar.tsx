"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0a0e]/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-[#0a0a0e]/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 mr-8">
            <Image
              src="/logo-branca.webp"
              alt="NeonHost"
              width={160}
              height={55}
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1 whitespace-nowrap relative group py-2"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Início</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              href="/vps-gamer" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap relative group py-2"
            >
              Servidores VPS
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              href="/dedicado" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap relative group py-2"
            >
              Servidores Dedicados
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              href="/games" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap relative group py-2"
            >
              Servidores de Jogos
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              href="/redes" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap relative group py-2"
            >
              Infraestrutura
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap relative group py-2"
            >
              Contato
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            {/* Divider with more spacing */}
            <div className="w-px h-6 bg-gray-600 mx-8"></div>
            
            <div className="flex items-center space-x-4">
              {/* <Link 
                href="https://app.neonhost.com.br/login" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-white/5 whitespace-nowrap"
              >
                Entrar
              </Link> */}

              <Link 
                href="https://app.neonhost.com.br/register"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Área do Cliente
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200 p-2 flex-shrink-0"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0a0a0e]/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="flex items-center space-x-2 px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Início</span>
              </Link>

              <Link 
                href="/vps-gamer" 
                className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servidores VPS
              </Link>

              <Link 
                href="/dedicado" 
                className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servidores Dedicados
              </Link>

              <Link 
                href="/games" 
                className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servidores de Jogos
              </Link>

              <Link 
                href="/redes" 
                className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Infraestrutura
              </Link>


              <Link 
                href="/about" 
                className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link 
                  href="https://app.neonhost.com.br/register"
                  className="block px-3 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 mx-3 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Área do Cliente
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
