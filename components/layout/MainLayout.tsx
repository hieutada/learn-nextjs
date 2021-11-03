import * as React from 'react'
import { LayoutProps } from '../../models'
import Link from 'next/link'
import NavBar from '../common/NavBar'

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />

      <div>{children}</div>
    </div>
  )
}
