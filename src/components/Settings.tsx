import React, { useState } from 'react';
import { Settings as SettingsIcon, Moon, Sun, Bell, User } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Settings({ isOpen, onClose }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SettingsIcon className="h-6 w-6 text-amber-600" />
              <h2 className="text-xl font-semibold">Configuración</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-500" />
                <span>Perfil de Usuario</span>
              </div>
              <button className="text-amber-600 text-sm">Editar</button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {darkMode ? (
                  <Moon className="h-5 w-5 text-gray-500" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-500" />
                )}
                <span>Modo Oscuro</span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-11 h-6 flex items-center rounded-full p-1 ${
                  darkMode ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    darkMode ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <span>Notificaciones</span>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-11 h-6 flex items-center rounded-full p-1 ${
                  notifications ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    notifications ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}