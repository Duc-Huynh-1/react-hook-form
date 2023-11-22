import  { useEffect, useState } from 'react';
import { Header } from '../heater/header';
import { IProduct } from '../../types/products';
import { Navhome } from '../heater/navhome';
import { GetProducts } from '../../api/products';

export const Homepages= () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error , setError] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const data = await  GetProducts()
                setProducts(data.data)
            } catch (error) {
                console.log('[GET_PRODUCTS_ERROR]', error)
                setError((error as Error).message)
            } finally { // end
                setIsLoading(false)
            }
        })()
    }, [])

    if (error) return <div>{error}</div>
    if (isLoading) return <div>Loading...</div>
    return (
        <div className=''>
            <Header />
            <div className='flex gap-5 mx-[80px]'>
                <Navhome />
                <aside className='grid grid-cols-4 gap-5 '>
                    {products.map((item, index) => (
                          <a href={`/products/${item.id}`}>
                            <div key={index} className='text-center p-4 bg-white shadow-md mt-[10px] w-[230px]'>
                                <h1 className='text-[18px] font-medium'>{item.name}</h1>
                              
                                    <img src={item.image} alt={item.name} className='h-[280px] my-[10px]'/>
                                
                                <p className='text-[18px] font-normal text-[red]'>{item.price} vnd</p>
                                <p className='text-[18px] font-normal'>{item.desc}</p>
                                <button className='w-[100px] border h-[40px] bg-green-300 text-[white]'>
                                    Buy
                                </button>
                            </div>
                            </a>
                        ))}
                </aside>
            </div>
        </div>
    );
};
