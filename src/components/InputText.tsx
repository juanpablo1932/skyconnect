'use client';

import { useSearchStore } from '@/stores/search-store';


export default function InputText() {
  const { setSearch, search } = useSearchStore();


  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Buscar aeropuertos..."
        className="bg-white rounded-4xl text-blue-600 placeholder-blue-600 py-2 px-3 w-xl"
      />
    </>
  );
}