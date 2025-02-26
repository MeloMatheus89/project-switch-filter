import React from 'react';
import { Settings, Power, Network } from 'lucide-react';

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
  setHasManagement
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
        <Settings className="w-5 h-5 mr-2" />
        Filtros
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número mínimo de portas
          </label>
          <input
            type="range"
            min="4"
            max="48"
            value={portCount}
            onChange={(e) => setPortCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-600 mt-1 block">
            {portCount} portas
          </span>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Power className="w-4 h-4 text-navy-600" />
            <span>PoE</span>
          </label>
          <button
            onClick={() => setHasPoe(!hasPoe)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              hasPoe ? 'bg-navy-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hasPoe ? 'translate-x-6' : 'translate-x-1'
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
              hasManagement ? 'bg-navy-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hasManagement ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}