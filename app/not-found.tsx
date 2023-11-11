import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center mt-5'>
      <h2 className='text-2xl font-bold mb-2'>Not Found</h2>
      <p className='text-lg mb-4'>Could not find requested resource</p>
      <Link className="button rouned-md bg-violet-500 text-white hover:text-white" href="/">Return Home 🏠</Link>
    </div>
  )
}