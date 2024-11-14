import { Home, Shield, Briefcase, Building2, Scale, Users, Gavel, FileText } from 'lucide-react';
import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'civil',
    title: 'Derecho Civil',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
    buttonColor: 'bg-blue-600',
    chatBubbleColor: 'bg-blue-600',
    description: 'Especialistas en contratos, propiedad y asuntos familiares',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400',
    avatarImage: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=150',
    welcomeMessage: 'Estoy aquí para ayudarte con tus consultas sobre contratos, propiedades y derecho familiar.',
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-gradient-to-r from-red-600 to-red-700',
    buttonColor: 'bg-red-600',
    chatBubbleColor: 'bg-red-600',
    description: 'Expertos en defensa criminal y proceso penal',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=400',
    avatarImage: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=150',
    welcomeMessage: 'Te asesoraré en temas de defensa criminal y procesos penales.',
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-r from-green-600 to-green-700',
    buttonColor: 'bg-green-600',
    chatBubbleColor: 'bg-green-600',
    description: 'Especialistas en derechos del trabajador',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=400',
    avatarImage: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=150',
    welcomeMessage: 'Te ayudaré con consultas sobre derechos laborales y relaciones de trabajo.',
  },
  {
    id: 'corporativo',
    title: 'Derecho Corporativo',
    icon: Building2,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-gradient-to-r from-purple-600 to-purple-700',
    buttonColor: 'bg-purple-600',
    chatBubbleColor: 'bg-purple-600',
    description: 'Asesoría legal para empresas y negocios',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400',
    avatarImage: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=150',
    welcomeMessage: 'Te orientaré en temas legales relacionados con empresas y negocios.',
  }
];