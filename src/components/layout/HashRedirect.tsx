'use client'

import { useEffect } from 'react'

export function HashRedirect({ hash }: { hash: string }) {
  useEffect(() => {
    window.location.replace(`/${hash}`)
  }, [hash])

  return <p className="p-10 text-center text-sm text-neutral-500">Opening that section…</p>
}
