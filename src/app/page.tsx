import Image from 'next/image'
import {auth} from '@clerk/nextjs';
import {redirect} from 'next/navigation';
import Link from 'next/link';


export default function Home() {
   const {userId } = auth();

   if(userId) {
      redirect('/dashboard')
   }
  return (
    <main className="mt-20 items-center justify-center">
      <h1 className='mb-20 text-center'>Rama Academy</h1>
      <Link href="/sign-in">
      <button type='button' className="w-full rounded bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
    Sign in
  </button>
      </Link>
      <Link href="/sign-up">
      <button type='button' className="w-full rounded bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
    Sign up
  </button>
      </Link>

    </main>
  )
}
