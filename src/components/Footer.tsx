import React from 'react';
import { BriefcaseIcon, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BriefcaseIcon className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">Abogato</span>
            </div>
            <p className="text-gray-400">
              Asesoría legal con un toque felino. 
              Simplificando el acceso a la justicia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contacto@abogato.com</li>
              <li>Tel: (555) 123-4567</li>
              <li>Horario: Lun-Vie 9:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center text-sm">
            Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> por Abogato © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}