import { useEffect, useState } from "react"
import { IProduct } from "../../types/products"
import { GetProducts } from "../../api/products"
import { Delete } from "../../api/products"

export const List_products = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await GetProducts();
            setProducts(response.data);
        };
        fetchData();
    }, []);

    
    const handleRemove =(id:number)=>{
        const tb =window.confirm("Bạn có muốn xóa hay không!")
        if(!tb) return;
        Delete(id)
        .then(() =>{
            alert("thanh cong")
            const Filter = products.filter(git => git.id != id)
          setProducts(Filter) // reload
            
          
        })
    }
    
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold '>Dashboard</h1>
                <div>
                    <a href="/admin/add"><button className='w-[100px] h-[30px] border my-[20px]'>Add</button></a>
                </div>
                <table>
                    <thead>
                        <tr className='text-center'>
                            <th className='w-[100px]'>#</th>
                            <th className='w-[200px]'>Name</th>
                            <th className='w-[300px]'>Image</th>
                            <th className='w-[200px]'>Price</th>
                            <th className='w-[200px]'>Desc</th>
                            <th className='w-[300px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr className='text-center'  key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                              <td>  <img src={item.image} alt={item.name} /></td>
                                <td>{item.price}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <button onClick={() => handleRemove(item.id!)} className="border w-[80px] h-[40px] text-[16px] font-medium bg-[blue] text-[white]">Delete</button>
                                    <a href={`/admin/edit/${item.id}`}><button className="border w-[80px] h-[40px] text-[16px] font-medium bg-[red] text-[white]">Edit</button></a>
                                    

                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}