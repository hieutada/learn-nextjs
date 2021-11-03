import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '../components/layout'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <div className="div">
      <h1>Đây là trang chủ</h1>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
