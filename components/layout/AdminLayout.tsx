import * as React from 'react'
import { LayoutProps } from '../../models'
import Link from 'next/link'
import AdminNavBar from '../common/AdminNavBar'

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <AdminNavBar />

      <div>{children}</div>
    </div>
  )
}
