'use client'

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface PaginatorProps {
  totalPages: number;
  visiblePages?: number;
}

export default function Paginator({ totalPages, visiblePages = 3 } : PaginatorProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (currentPage) {
      params.set('offset', currentPage.toString())
    } else {
      params.delete('offset')
    }

    replace(`${pathname}?${params.toString()}`)
  }, [currentPage]);

  // Calcula las páginas visibles
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  // Funciones para cambiar de página
  const goToPage = (page: number) => setCurrentPage(page);
  const goToPrevious = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));

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
          onClick={() => goToPage(page)}
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

