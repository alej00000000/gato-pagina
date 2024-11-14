import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BriefcaseIcon, Settings as SettingsIcon } from 'lucide-react';
import Settings from './Settings';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <BriefcaseIcon className="h-8 w-8 text-amber-600 transform group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Abogato
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/servicios">Servicios</NavLink>
              <NavLink href="/nosotros">Nosotros</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
              <button
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <SettingsIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/">Inicio</MobileNavLink>
              <MobileNavLink href="/servicios">Servicios</MobileNavLink>
              <MobileNavLink href="/nosotros">Nosotros</MobileNavLink>
              <MobileNavLink href="/contacto">Contacto</MobileNavLink>
              <button
                onClick={() => {
                  setShowSettings(true);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors"
              >
                Configuración
              </button>
            </div>
          </div>
        )}
      </nav>

      <Settings isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="text-gray-600 hover:text-amber-600 font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors"
    >
      {children}
    </Link>
  );
}