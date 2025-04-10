import React from "react";
import { Wifi } from "lucide-react";

interface AccessPointFilterPanelProps {
  wifiStandard: string;
  setWifiStandard: (value: string) => void;
  environment: string;
  setEnvironment: (value: string) => void;
  minDevices: number;
  setMinDevices: (value: number) => void;
}

export function AccessPointFilterPanel({
  wifiStandard,
  setWifiStandard,
  environment,
  setEnvironment,
  minDevices,
  setMinDevices,
}: AccessPointFilterPanelProps) {
  const wifiStandards = ["All", "Wi-Fi 4", "Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 7"];
  const environments = ["All", "Indoor", "Outdoor"];
  const deviceOptions = [100, 200, 300, 500];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
        <Wifi className="w-5 h-5 mr-2" />
        Filtros
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Padrão de Wi-Fi</label>
          <div className="flex flex-wrap gap-2">
            {wifiStandards.map((standard) => (
              <button
                key={standard}
                onClick={() => setWifiStandard(standard)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-200
                  ${
                    wifiStandard === standard
                      ? "bg-navy-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-navy-100"
                  }
                `}
              >
                {standard}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Instalação</label>
          <div className="flex flex-wrap gap-2">
            {environments.map((env) => (
              <button
                key={env}
                onClick={() => setEnvironment(env)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-200
                  ${
                    environment === env
                      ? "bg-navy-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-navy-100"
                  }
                `}
              >
                {env}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Mínimo de Dispositivos Conectados
          </label>
          <div className="flex flex-wrap justify-center gap-3">
            {deviceOptions.map((option) => (
              <button
                key={option}
                onClick={() => setMinDevices(option)}
                className={`
                  relative w-16 h-16 rounded-full flex items-center justify-center
                  transition-all duration-200 
                  ${
                    minDevices === option
                      ? "bg-navy-600 text-white shadow-lg scale-110"
                      : "bg-gray-100 text-gray-700 hover:bg-navy-100"
                  }
                `}
              >
                <span className="font-medium">{option}</span>
                {minDevices === option && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">
            Mostrando APs que comportam {minDevices} ou + dispositivos
          </p>
        </div>
      </div>
    </div>
  );
}
