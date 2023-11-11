import './post-content.scss'

export default function ShowPost({postData}) {
  return (
    <div className='post-content mx-auto md:max-w-screen-md w-full'>
      <h2 className='text-4xl font-bold mb-5'>{postData.title}</h2>
      <p className='text-[22px]/9' suppressHydrationWarning dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  )
}