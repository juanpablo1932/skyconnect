'use client'

import React, { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {useAirportStore} from '@/stores/airport-store'

interface PaginatorProps {
  totalPages: number;
  visiblePages?: number;
}

export default function Paginator({ totalPages, visiblePages = 3 } : PaginatorProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const { goToPrevious, goToNext, currentPage, offset} = useAirportStore()

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (offset) {
      params.set('offset', offset.toString())
    } else {
      params.delete('offset')
    }

    replace(`${pathname}?${params.toString()}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={goToPrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
      >
        Anterior
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-2 rounded-md ${
            currentPage === page ? "bg-blue-800 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};

