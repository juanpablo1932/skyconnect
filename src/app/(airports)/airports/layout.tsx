import React, { Suspense } from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
    </>
  )
}
