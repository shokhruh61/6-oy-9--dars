import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bars from '../assets/images/bars.svg'
import axios from 'axios'

const Products = () => {
  const [price, setPrice] = useState(1000);
  const [freeShipping, setFreeShipping] = useState(false);

  const handleReset = () => {
    setPrice(1000);
    setFreeShipping(false);
  };

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((response) => {
        if (response.status == 200) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function handleSearch(id) {
    navigate(`/products/${id}`)
  }


  return (
    <div className='max-w-[1180px]  mx-auto'>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
          {/* Search Product */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-2">
              Search Product
            </label>
            <input
              type="text"
              id="search"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search..."
            />
          </div>

          {/* Select Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Select Category
            </label>
            <select
              id="category"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">All</option>
            </select>
          </div>

          {/* Select Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Select Company
            </label>
            <select
              id="company"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">All</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium mb-2">
              Sort By
            </label>
            <select
              id="sort"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="a-z">A-Z</option>
            </select>
          </div>
          <br />
          <div >
            <label htmlFor="price" className="block text-sm font-medium mb-2 ">
              Select Price
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                id="price"
                min="0"
                max="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
              <span className="text-sm font-semibold">${price}.00</span>
            </div>
            <p className="text-sm mt-1">Max: $1000.00</p>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center gap-2 lg:col-span-5">
            <input
              type="checkbox"
              id="free-shipping"
              checked={freeShipping}
              onChange={() => setFreeShipping(!freeShipping)}
              className="w-4 h-4"
            />
            <label htmlFor="free-shipping" className="text-sm font-medium">
              Free Shipping
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-4">
          <button
            onClick={handleReset}
            className="bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600"
          >
            SEARCH
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">
            RESET
          </button>
        </div>
      </div>

      <div className='mt-24 border-b flex items-center justify-between'>
        <div>
          <h4 className='font-medium text-xl mb-3'>
            22 products
          </h4>
        </div>

        <div className='flex items-center gap-5 '>
          <img className='w-8 h-8 mb-3 cursor-pointer' src="https://cdn0.iconfinder.com/data/icons/bold-icons/32/big_grid-64.png" />
          <img className=' w-8 h-8 mb-3 cursor-pointer' src={Bars} alt="Menu hamburger bars" />
        </div>
      </div>



      <div className="w-[1100px] rounded mx-auto p-6 mt-16 flex flex-wrap justify-between gap-6">
        {products.length > 0 &&
          products.map((product, index) => (
            <div
              onClick={() => {
                handleSearch(product.id);
              }}
              className="text-center shadow-md hover:shadow-xl p-4 h-[280px] cursor-pointer items-center rounded-lg w-[330px] bg-white"
              key={index}
            >
              <img
                src={product.attributes.image}
                className="w-full h-[150px] rounded-xl object-cover mb-9"
                alt={product.attributes.title}
              />
              <h3 className="text-2xl tracking-[1px] font-semibold text-teal-900 text-opacity-90">
                {product.attributes.title}
              </h3>
              <span className="tracking-[2px] text-sky-800">
                {product.attributes.price}$
              </span>
            </div>
          ))}
      </div>

    </div >
  );
};

export default Products;
