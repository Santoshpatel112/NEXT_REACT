"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = () => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path
  return (
     <nav className="flex gap-4 bg-gray-100 p-3 rounded-xl shadow-sm">
      <Link
        href="/about/dashboard"
        className={`px-4 py-2 rounded-lg transition ${
          isActive("/about/dashboard")
            ? "bg-blue-600 text-white font-semibold shadow"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        Dashboard
      </Link>

      <Link
        href="/about/settings"
        className={`px-4 py-2 rounded-lg transition ${
          isActive("/about/settings")
            ? "bg-blue-600 text-white font-semibold shadow"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        Settings
      </Link>
    </nav>
  )
}

export default Navigation