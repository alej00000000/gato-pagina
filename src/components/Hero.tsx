import React from 'react';
import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 text-white rounded-3xl">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyIDEyYzAtNi42MjctNS4zNzMtMTItMTItMTJTMCAyMy4zNzMgMCAzMHM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMnoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 md:py-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Asesoría Legal con un Toque Felino
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg">
              Bienvenido a Abogato, donde la justicia se sirve con gracia felina. 
              Obtén orientación legal de manera simple y amigable.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <Scale className="h-5 w-5 text-amber-300" />
              <span className="font-semibold">Aviso Legal</span>
            </div>
            <p className="text-sm text-white/80">
              La información proporcionada es de carácter orientativo. 
              Para casos específicos, recomendamos consultar con un profesional legal calificado.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-transparent opacity-50 rounded-3xl transform rotate-3" />
          <img 
            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=600"
            alt="Legal Cat"
            className="relative rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}