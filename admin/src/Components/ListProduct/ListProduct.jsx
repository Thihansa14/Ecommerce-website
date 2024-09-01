import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:5000/allproducts')
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) })
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async (id) => {
    await fetch('http://localhost:5000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product Image</p>
        <p>ID</p>
        <p>Product Category</p>
        <p>Product Name</p>
        <p>Stock Keeping Unit</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className='listproduct-format-main listproduct-format'>
              <img src={product.image} alt='' className='listproduct-product-icon' />
              <p>{product.id}</p>
              <p>{product.category}</p>
              <p>{product.name}</p>
              <p>{product.sku}</p>
              <p>Rs.{product.price}</p>
              <img onClick={() => { remove_product(product.id) }} src={cross_icon} alt="" className='listproduct-remove-icon' />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ListProduct
