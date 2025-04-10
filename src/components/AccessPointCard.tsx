import React from 'react';
import { Wifi, ArrowUp, Smartphone, Maximize2 } from 'lucide-react';
import type { AccessPoint } from '../types';

interface AccessPointCardProps {
  accessPoint: AccessPoint;
}

export function AccessPointCard({ accessPoint }: AccessPointCardProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-102 relative">
      <button 
        onClick={scrollToTop}
        className="absolute top-2 right-2 bg-navy-600 text-white p-2 rounded-full shadow-md hover:bg-navy-700 transition-colors z-10"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
      
      <img
        src={accessPoint.imageUrl}
        alt={accessPoint.model}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-navy-900 mb-2">
          {accessPoint.model}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {accessPoint.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-navy-100 text-navy-800">
            <Wifi className="w-4 h-4 mr-1" />
            {accessPoint.wifiStandard}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
            <Smartphone className="w-4 h-4 mr-1" />
            {accessPoint.maxDevices} devices
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
            <Maximize2 className="w-4 h-4 mr-1" />
            {accessPoint.environment}
          </span>
        </div>
        <div className="mt-3 text-sm text-gray-600">
          <p>Frequency Bands: {accessPoint.frequencyBands.join(', ')}</p>
          <p>Max Throughput: {accessPoint.maxThroughput} Mbps</p>
          <p>Coverage: {accessPoint.environment === 'Indoor' ? 
            `${accessPoint.coverage.indoor}m²` : 
            `${accessPoint.coverage.outdoor}m²`}
          </p>
        </div>
      </div>
    </div>
  );
}