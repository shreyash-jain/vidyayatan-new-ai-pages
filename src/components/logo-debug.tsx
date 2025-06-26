"use client";

import { useState, useEffect } from "react";

const trustedLogos = [
  "Frame 1000000941.png",
  "Frame 1000000942.png", 
  "Frame 1000000944.png",
  "Frame 1000000945.png",
  "Frame 1000000946.png",
  "Frame 1000000947.png",
  "Frame 1000000948.png",
  "Frame 1000000949.png",
  "Frame 1000001026.png",
  "Frame 1000001027.png",
];

export const LogoDebug = () => {
  const [logoStatus, setLogoStatus] = useState<Record<string, string>>({});

  useEffect(() => {
    const checkLogos = async () => {
      const status: Record<string, string> = {};
      
      for (const logo of trustedLogos) {
        try {
          const response = await fetch(`/assets/logos/${logo}`, { method: 'HEAD' });
          status[logo] = response.ok ? 'OK' : `Error: ${response.status}`;
        } catch (error) {
          status[logo] = `Failed: ${error}`;
        }
      }
      
      setLogoStatus(status);
    };

    checkLogos();
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 border rounded shadow-lg max-w-md max-h-96 overflow-y-auto z-50">
      <h3 className="font-bold mb-2">Logo Status Debug</h3>
      <div className="text-xs space-y-1">
        {Object.entries(logoStatus).map(([logo, status]) => (
          <div key={logo} className={`flex justify-between ${
            status === 'OK' ? 'text-green-600' : 'text-red-600'
          }`}>
            <span className="truncate mr-2">{logo}</span>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 