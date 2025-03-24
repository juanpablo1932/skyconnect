'use client';

import { useState, useEffect } from 'react';
import { useSearchStore } from '@/stores/search-store';
import useDebounce from '@/lib/hooks/useDebounce';

export default function InputDebounce() {
  const { setSearch, search } = useSearchStore();
  const [inputValue, setInputValue] = useState(search);
  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Buscar aeropuertos..."
        className="bg-white rounded-4xl text-blue-600 placeholder-blue-600 py-2 px-3 w-3xs lg:w-xl"
      />
    </>
  );
}