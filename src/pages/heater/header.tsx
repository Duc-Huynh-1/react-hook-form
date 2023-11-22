import React from 'react'

export const Header = () => {
    return (
        <div className='bg-[#C69A39] '>
            <div className='flex mx-[80px] h-[70px]  pt-[10px] '>
                <div>
                    <h1 className='font-bold text-2xl mt-[10px] text-[white]'>THE COFFE HOUSE</h1>
                </div>
                <div className='ml-[150px] relative'>
                    <input type="text" name="" id="" className='border w-[300px] h-[50px] rounded-[5px] pr-[40px] text-[15px]' placeholder='Tìm kiếm sản phẩm ...' />
                    <i className="fa-solid fa-magnifying-glass absolute right-0 top-0 m-3 text-[#8A6C1C] text-xl"></i>
                </div>
                <div className='flex mx-[20px]'>
                <a href="/signin"> <div className='shadow-xl'>
                        <button className='w-[100px] h-[50px] rounded-[5px] bg-[#8A6C1C]  hover:scale-105'>
                            <i className="fa-regular fa-user text-[white]"></i>
                            <p className='text-[white] font-normal text-[18px]'>signin</p>
                        </button>
                    </div></a>
                    <a href="/signup"> <div className='ml-[10px] shadow-xl'>
                       <button className='w-[100px] h-[50px]  rounded-[5px] bg-[#8A6C1C]  hover:scale-105' >
                            <i className="fa-regular fa-user text-[white]"></i>
                            <p className='text-[white] font-normal text-[18px]'>signup</p>
                        </button>
                    </div></a>
                </div>
                <div className='flex'>
                    <div className='mt-[12px]'>
                        <span className="text-[17px] font-medium cursor-pointer text-[white]"> Tin Tức   |</span>
                        <span className="text-[17px] font-medium ml-[5px] cursor-pointer text-[white]">EVENTS |</span>
                    </div>
                   <a href="cart">
                   <button className='w-[100px] h-[50px]  rounded-[5px]  ml-[20px]  hover:scale-105'>
                        <i className="fa-solid fa-cart-shopping text-[white] text-2xl" ></i>
                        <p className=' text-[white] font-normal '>Giỏ Hàng</p>
                    </button>
                   </a>
                </div>
            </div>
            <div className='mt-[10px] '>
                <nav>
                    <ul className='flex items-center justify-center pb-[10px]'>
                        <li className=' hover:scale-105'><a href="/" className='text-xl font-medium text-[white] mr-[52px] '>Trang chủ </a></li>
                        <li className=' hover:scale-105'><a href="/products" className='text-xl font-medium text-[white] mr-[52px]'>Sản phẩm </a></li>
                        <li className=' hover:scale-105'><a href=""  className='text-xl font-medium text-[white] mr-[52px]'>Menu</a></li>
                        <li className=' hover:scale-105'><a href=""  className='text-xl font-medium text-[white] mr-[52px]'>Cảm Hứng CloudFee </a></li>
                        <li className=' hover:scale-105'><a href=""  className='text-xl font-medium text-[white] mr-[52px]'>Cửa Hàng </a></li>
                        <li className=' hover:scale-105'><a href=""  className='text-xl font-medium text-[white] mr-[52px]'>Tuyển dụng</a></li>
                        <li className=' hover:scale-105'><a href=""  className='text-xl font-medium text-[white] mr-[52px]'>Địa Chỉ </a></li>
                        <li className=' hover:scale-105'><a href=""  className='text-xl font-medium text-[white] mr-[52px]'>Đặt Hàng</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}