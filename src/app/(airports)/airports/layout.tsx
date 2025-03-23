import React, { Suspense } from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Suspense fallback={<div className='h-full flex flex-row items-center justify-center'>Loading...</div>}>
      {children}
    </Suspense>
    </>
  )
}
