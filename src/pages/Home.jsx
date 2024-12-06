import React, { useEffect, useState } from 'react'
import Screem from '../assets/images/screem.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`https://strapi-store-server.onrender.com/api/products`)
            .then((response) => {
                if (response.status == 200) {
                    const info = response.data.data.slice(0, 3);
                    setProducts(info);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleSearch(id) {
        if (id) {
            navigate(`/products/${id}`);
        }
    }

    return (
        <div className='max-w-[1180px] mx-auto'>
            <div className=' mt-28  bg-white flex items-center justify-between gap-3 mb-24 '>
                <div>
                    <h1 className='text-6xl font-extrabold text-[#131650]'>We are changing <br /> the way people <br /> shop</h1>
                    <p className='text-2xl font-light mt-4 mb-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Tempore repellat explicabo enim soluta temporibus asperiores <br /> aut obcaecati perferendis porro nobis.</p>
                    <button className='bg-[blue] text-white py-3 px-2 rounded-md'>OUR PRODUCTS</button>
                </div>
                <div>
                    <img className='w-[500px] h-[500]' src={Screem} alt="" />
                </div>
            </div>

            <div className=' border-b mb-24'>
                <h3 className='text-3xl font-medium mb-6'>Featured products</h3>
                <hr />
            </div>

            <div className="flex justify-between">
                {products.map((product) => (
                    <div
                        onClick={() => {
                            handleSearch(product.id);
                        }}
                        key={product.id}
                        className="text-center shadow-md cursor-pointer hover:shadow-xl p-4 h-[280px] rounded-lg"
                    >
                        <img src={product.attributes.image} className="w-[280px] h-[150px] rounded-xl object-cover mb-9" alt={product.attributes.title}
                        />
                        <h3 className="text-2xl tracking-[1px] font-semibold text-teal-900 text-opacity-90 ">
                            {product.attributes.title}
                        </h3>
                        <span className="tracking-[2px] text-sky-800">
                            {product.attributes.price}$
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home;