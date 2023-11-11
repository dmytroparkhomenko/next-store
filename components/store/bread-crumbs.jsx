import Link from 'next/link'

export default function BreadCrumbs({category}) {
  return (
    <div className='flex flex-row'>
      <Link 
        href={`/store/`}
        className='block mx-2'
      >
        &#8592; Catalog
      </Link>
      {"/"}
      <Link 
        href={`/store/${category}`}
        className='block mx-2'
      >
        Category "{category}" 
      </Link>
    </div>
  )
}