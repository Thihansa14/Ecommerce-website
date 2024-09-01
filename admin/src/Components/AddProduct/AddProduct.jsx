import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.png';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [relatedImage1, setRelatedImage1] = useState(false);
  const [relatedImage2, setRelatedImage2] = useState(false);
  const [productDetails,setProductDetails] = useState({
    category:"mini_dresses",
    id:"",
    name:"",
    sku: "",
    price: "",
    sizes: "",
    colors:"",
    image:"",
    related_image1:"",
    details:"",
    exchanges:""
  })

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleRelatedImage1Upload = (e) => {
    setRelatedImage1(e.target.files[0]);
  };

  const handleRelatedImage2Upload = (e) => {
    setRelatedImage2(e.target.files[0]);
  };

  const changeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:5000/upload',{
      method: 'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data) => {responseData=data})

    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:5000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }
  return (
    <div className='add-product'>
      <div className='addproduct-info'>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select name="category" className="add-product-selector">
            <option value="mini_dresses">Mini Dresses</option>
            <option value="maxi_dresses">Maxi Dresses</option>
            <option value="midi_dresses">Midi Dresses</option>
            <option value="crop_tops">Crop Tops</option>
            <option value="tank_tops">Tank Tops</option>
            <option value="t-shirts">T-shirts</option>
            <option value="blouses">Blouses</option>
            <option value="swim_wear">Swim Wear</option>
            <option value="party_wear">Party Wear</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Name</p>
          <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
      </div>

      <div className='addproduct-info'>
        <div className="addproduct-itemfield">
          <p>ID</p>
          <input value={productDetails.id} onChange={changeHandler} type="text" name='id' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Stock Keeping Unit</p>
          <input value={productDetails.sku} onChange={changeHandler} type="text" name='sku' placeholder='Type here' />
        </div>
      </div>

      <div className="addproduct-info">
        <div className="addproduct-itemfield">
          <p>Sizes</p>
          <input value={productDetails.sizes} onChange={changeHandler} type="text" name='sizes' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Colours</p>
          <input value={productDetails.colors} onChange={changeHandler} type="text" name='colors' placeholder='Type here' />
        </div>
      </div>

      <div className="addproduct-info">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Image</p>
          <label htmlFor="file-input-main">
            <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="Product Main" />
          </label>
          <input onChange={handleImageUpload} type="file" name='image' id='file-input-main' hidden />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Related Images</p>
        <div className='related-images'>
          <label htmlFor="file-input-related1">
            <img src={relatedImage1 ? URL.createObjectURL(relatedImage1) : upload_area} className='addproduct-thumnail-img' alt="Related 1" />
          </label>
          <input onChange={handleRelatedImage1Upload} type="file" name='related_image1' id='file-input-related1' hidden />
        </div>
        <div className='related-images'>
          <label htmlFor="file-input-related2">
            <img src={relatedImage2 ? URL.createObjectURL(relatedImage2) : upload_area} className='addproduct-thumnail-img' alt="Related 2" />
          </label>
          <input onChange={handleRelatedImage2Upload} type="file" name='related_image2' id='file-input-related2' hidden />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Details</p>
        <input value={productDetails.details} onChange={changeHandler} type="text" name='details' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Exchanges</p>
        <input value={productDetails.exchanges} onChange={changeHandler} type="text" name='exchanges' placeholder='Type here' />
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  );
}

export default AddProduct;
