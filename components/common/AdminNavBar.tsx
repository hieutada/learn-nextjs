import * as React from 'react'
import Link from 'next/link'

export interface IAdminNavBarProps {}

export default function AdminNavBar(props: IAdminNavBarProps) {
  return (
    <div style={{ color: 'blue' }}>
      <h1>NAVBAR 2</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Link href="/">
                <a>Home</a>
              </Link>
            </td>
            <td>
              <Link href="/about">
                <a>About</a>
              </Link>
            </td>
            <td>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </td>
            <td>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
