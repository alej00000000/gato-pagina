import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Info } from 'lucide-react';
import { categories } from '../data/categories';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chat() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentCategory = categories.find(c => c.id === category);

  useEffect(() => {
    if (currentCategory) {
      setMessages([{
        id: 1,
        text: `¡Bienvenido a la consulta de ${currentCategory.title}! ${currentCategory.welcomeMessage}`,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [category]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simular respuesta del abogato
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: `Como experto en ${currentCategory?.title}, te sugiero considerar los siguientes aspectos legales...`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (!currentCategory) return <div>Categoría no encontrada</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 space-y-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-amber-600"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className={`p-6 rounded-xl ${currentCategory.bgColor} text-white`}>
          <div className="flex items-start space-x-4">
            <img
              src={currentCategory.avatarImage}
              alt={`Abogato ${currentCategory.title}`}
              className="w-16 h-16 rounded-full border-2 border-white/20"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentCategory.title}</h2>
              <p className="text-white/90">{currentCategory.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            La información proporcionada es de carácter orientativo. Para casos específicos,
            recomendamos consultar con un profesional legal calificado.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 h-[600px] flex flex-col">
        <div className="flex-grow overflow-y-auto space-y-4 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === 'user'
                    ? `${currentCategory.chatBubbleColor} text-white`
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
                <div className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t pt-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta legal..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className={`${currentCategory.buttonColor} text-white p-3 rounded-lg hover:opacity-90 transition-opacity`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}