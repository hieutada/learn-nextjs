import React, { useEffect, useState } from 'react'
// import Tada from '../components/common/Tada'
import { AdminLayout } from '../components/layout'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material'

// component này chỉ chạy bên phía client
const Tada = dynamic(() => import('../components/common/Tada'), { ssr: false })

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
  const init: any = {}
  const [user, setUser] = useState(init)

  const router = useRouter()
  const userId = Number(router.query?.userId)

  // chỉ chạy bên phía client
  useEffect(() => {
    if (!userId) return
    ;(async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      const data = await res.json()

      setUser(data)
    })()
  }, [userId])

  const handleClickNextUser = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          userId: (userId || 0) + 1,
        },
      },
      undefined,
      { shallow: true } // chỉ trigger update bên phía client
    )
  }

  if (!user) return <div>Loading...</div>

  return (
    <Box>
      <Typography component='h1' variant='h4' color='primary.main'>Thông tin User</Typography>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>

      <Tada />

      <button onClick={handleClickNextUser}>Next User</button>
    </Box>
  )
}

AboutPage.Layout = AdminLayout
