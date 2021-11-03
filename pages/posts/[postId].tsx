import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PostDetail(props: any) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link href="/posts">
        <a style={{ color: 'green' }}>Back Post list</a>
      </Link>
      <h3>
        Post {props.id} detail{}
      </h3>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\nGET STATIC PATHS')

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const data = await res.json()

  return {
    paths: data.map((post: any) => ({ params: { postId: String(post.id) } })),
    fallback: true, // fallback: 'blocking' - tự tạo html, phụ thuộc TTFB | true - router.isFallback = true | false - error 404
  }
}

export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.postId
  console.log('\nGET STATIC PROPS', id)

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  // -> tạo ra file html tương ứng tại thời điểm build
  return {
    props: data,
    revalidate: 60, // SSG + revalidate -> ISR
  }
}
