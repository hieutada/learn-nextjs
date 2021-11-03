import * as React from 'react'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next'

export interface IProfileProps {
  info: any
}

export default function Profile({ info }: IProfileProps) {
  if (!info) return <div>Loading...</div>

  return (
    <div>
      <h2>Thông tin user</h2>
      <img src={info.picture.large} alt="Avatar" />
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=60')

  console.log('RUNNNN');
  await new Promise(res => setTimeout(res, 3000))

  const res = await fetch('https://randomuser.me/api/')
  const data = await res.json()

  return {
    props: {
      info: data.results[0],
    }, // will be passed to the page component as props
  }
}
