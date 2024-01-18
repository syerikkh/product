import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card } from '@/components/Card'
import { AddProduct } from '@/components/AddProduct'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [addCardDisplay, setAddCardDisplay] = useState(false);

  return (
    <div className='p-20 bg-yellow-200 h-[100vh]'>
      <div className='flex justify-end items-end flex-col'>
        <button onClick={() => { setAddCardDisplay(!addCardDisplay) }} className='p-2 bg-black rounded-md text-white'>Add Product</button>
        {addCardDisplay ? <AddProduct /> : <></>}
      </div>
      <div className='flex'>
        <Card />

      </div>
    </div>
  )
}
