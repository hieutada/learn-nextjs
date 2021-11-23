import * as React from 'react'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next'

export interface IProfileProps {
  info: any
}

export default function Profile({ info }: IProfileProps) {
  if (!info) return <div>Loading...</div>

  const {picture, name, gender, location} = info
  return (
    <div>
      <h2>Thông tin user</h2>
      <img src={picture.large} alt="Avatar" />
      <p>{name.title}. {name.first} {name.last}</p>
      <p>Gender: {gender}</p>
      <p>Country: {location.country}</p>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=60')

  await new Promise(res => setTimeout(res, 3000))

  const res = await fetch('https://randomuser.me/api/')
  const data = await res.json()

  return {
    props: {
      info: data.results[0],
    }, // will be passed to the page component as props
  }
}
