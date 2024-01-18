import React, { useState } from 'react'
import { useEffect } from 'react'

export const Card = () => {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:8080/products')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    // const readProduct = async () => {
    //     try {
    //         const res = await fetch('http://localhost:8080/products', {
    //             method: 'GET',

    //         })
    //         console.log('successfully read')

    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }
    return (
        <div className='p-4 flex gap-3'>
            {products.map((product) => {
                return (
                    <div className='p-2 bg-emerald-500 rounded-md'>
                        <div className='flex gap-4' key={product.id}>
                            <div>
                                <h1 className='font-semibold text-2xl'>Product: {product.name}</h1>
                                <p className='text-xl'>Price: {product.price}$</p>
                            </div>
                            <button className='text-red-500 font-bold border rounded-full p-2'>X</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

