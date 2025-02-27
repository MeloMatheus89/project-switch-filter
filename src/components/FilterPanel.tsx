import React from "react";
import { Settings, Power, Network } from "lucide-react";

interface FilterPanelProps {
  portCount: number;
  setPortCount: (value: number) => void;
  hasPoe: boolean;
  setHasPoe: (value: boolean) => void;
  hasManagement: boolean;
  setHasManagement: (value: boolean) => void;
}

export function FilterPanel({
  portCount,
  setPortCount,
  hasPoe,
  setHasPoe,
  hasManagement,
  setHasManagement,
}: FilterPanelProps) {
  // Quantidade de portas de um switch. Números comuns.
  const portOptions = [4, 8, 16, 24, 48];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
        <Settings className="w-5 h-5 mr-2" />
        Filtros
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Número mínimo de portas
          </label>
          <div className="flex flex-wrap justify-center gap-3">
            {portOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPortCount(option)}
                className={`
                  relative w-12 h-12 rounded-full flex items-center justify-center
                  transition-all duration-200 
                  ${
                    portCount === option
                      ? "bg-navy-600 text-white shadow-lg scale-110"
                      : "bg-gray-100 text-gray-700 hover:bg-navy-100"
                  }
                `}
              >
                <span className="font-medium">{option}</span>
                {portCount === option && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">
            Mostrando switches com <strong>{portCount} </strong>ou mais portas
          </p>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Power className="w-4 h-4 text-navy-600" />
            <span>PoE</span>
          </label>
          <button
            onClick={() => setHasPoe(!hasPoe)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              hasPoe ? "bg-navy-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hasPoe ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Network className="w-4 h-4 text-navy-600" />
            <span>Gerenciável</span>
          </label>
          <button
            onClick={() => setHasManagement(!hasManagement)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              hasManagement ? "bg-navy-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hasManagement ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
