// components/LoadingIndicator.tsx
'use client'
import { useLinkStatus } from 'next/link'

export default function LoadingIndicator() {
  const { pending } = useLinkStatus()

  return pending ? (
    <div className="spinner" role="status" aria-label="Loading..." />
  ) : null
}
