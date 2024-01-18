import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

export const AddProduct = () => {
    const [disappear, setDissapear] = useState(false);
    const [products, setProducts] = useState([])

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('')

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:8080/products')
            const data = await res.json()
            setProducts(data)
            console.log(data, 'data')
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        fetchData()

    }, [])

    const createProduct = async () => {

        try {
            const res = await fetch('http://localhost:8080/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productName,
                    price: productPrice
                })
            })
            console.log('successs')

        } catch (error) {
            alert(error.message)
        }


    }
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div onClick={() => { setDissapear(!disappear) }} className='absolute left-0 top-0 w-full h-full bg-black opacity-80'>
            </div>
            <div className='bg-white rounded-md w-80 h-72 p-10 z-20 flex flex-col gap-6'>
                <div><h1 className='font-bold text-2xl'>Add your Product</h1></div>
                <div> <input onChange={(e) => setProductName(e.target.value)} type="text" placeholder='Name of Product:' />
                </div>
                <div className='flex gap-2'> <input onChange={(e) => setProductPrice(e.target.value)} type="number" placeholder='Price: ' />
                    $</div>
                <button onClick={createProduct} className='bg-black p-2 rounded-md text-white'>Add Product</button>
            </div>
        </div >
    )
}
