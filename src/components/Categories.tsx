import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, Home, Briefcase, Shield, Building2 } from 'lucide-react';

const categories = [
  {
    id: 'civil',
    title: 'Derecho Civil',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    description: 'Contratos, propiedad y asuntos familiares',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    description: 'Defensa criminal y proceso penal',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    description: 'Relaciones laborales y derechos del trabajador',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'corporativo',
    title: 'Derecho Corporativo',
    icon: Building2,
    color: 'from-purple-500 to-purple-600',
    description: 'Empresas y negocios',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Legales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona la categoría que mejor se ajuste a tu consulta legal
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={() => navigate(`/chat/${category.id}`)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity`} />
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <category.icon className="h-16 w-16 text-white opacity-90" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-amber-600 font-medium">
                  <span>Consultar ahora</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}