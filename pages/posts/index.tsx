import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AdminLayout } from '../../components/layout'

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
  // console.log('🚀 ~ Log này hiển thị trên cả client và server')
  const router = useRouter()

  return (
    <div>
      <h3>Post List</h3>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => router.back()}>
        Back
      </button>
    </div>
  )
}

PostListPage.Layout = AdminLayout

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  // console.log('🚀 ~ Log này hiển thị bên phía server')

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const data = await res.json()

  return {
    props: {
      posts: data,
    },
  }
}
