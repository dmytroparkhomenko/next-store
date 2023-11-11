'use client'

export default function Error({ error }) {
  return <h2 className="text-xl">{error.message}</h2>
}