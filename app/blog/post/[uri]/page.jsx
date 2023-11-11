// API
import { getSinglePost } from '@/api/blog-fetching/index'

// next
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ShowPost = dynamic(() => import('./show-post'), { ssr: false })

export default async function Post({ params }) {
  const post = await getSinglePost(params.uri)

  return (
    <>
      <Link href="/blog" className='block mx-2'>
        &#8592; Back to posts
      </Link>
      <ShowPost postData={post} />
    </>
  );
}