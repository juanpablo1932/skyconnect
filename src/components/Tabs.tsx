'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

const tabs = [
  { id: "general", label: "General" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "zona-horaria", label: "Zona Horaria" },
  { id: "estadisticas", label: "Estadísticas", disabled: true },
];

export default function Tabs() {
  const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("general");

    useEffect(() => {
      const params = new URLSearchParams(searchParams)
  

        params.set('option', activeTab)

        replace(`${pathname}?${params.toString()}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-10 bg-gray-700 p-2 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-2 text-center text-white font-medium rounded-lg transition-all
              ${
                activeTab === tab.id
                  ? "bg-blue-600"
                  : " hover:bg-gray-600 text-gray-400"
              }`}
            onClick={() => setActiveTab(tab.id)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
