'use client'
import { useUser } from '@clerk/nextjs'


const ClientPage = () => {

  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className='flex items-center justify-center flex-col h-full'>
      Hello, {user.username}, welcome to Clerk
    </div>
  )
}

export default ClientPage