// API
import { getPosts } from '@/api/blog-fetching/index'

// next 
import Link from 'next/link';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <h2 className='text-3xl mb-5'>Our Blog</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {posts.map((post) => (
          <div key={post.uri} className="card">
              <Link href={'blog/post' + post.uri}>
                <img className='h-[185px] w-full brightness-[0.80] hover:brightness-[0.90] transition-all' src={post?.featuredImage?.node?.sourceUrl} alt={post?.featuredImage?.node?.altText} />
                <h3 className='text-xl m-3'>{post.title}</h3>
              </Link>
            </div>
          ))}
      </div>
    </>
  )
} 