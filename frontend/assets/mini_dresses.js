import mini1 from '../assets/images/product_mini19.webp';
import mini2 from '../assets/images/product_mini3.jpg';
import mini3 from '../assets/images/product_mini4.jpg'; 
import mini4 from '../assets/images/product_mini5.jpg'; 
import mini5 from '../assets/images/product_mini2.webp'; 
import mini6 from '../assets/images/product_mini1.webp';
import mini6_img2 from '../assets/images/product_mini1_img2.webp'
import mini6_img3 from '../assets/images/product_mini1_img3.webp'
import mini7 from '../assets/images/product_mini3.webp';
import mini7_img2 from '../assets/images/product_mini3_img2.webp'
import mini7_img3 from '../assets/images/product_mini3_img3.webp'
import mini8 from '../assets/images/product_mini7.webp'; 
import mini9 from '../assets/images/product_mini8.webp'; 
import mini10 from '../assets/images/product_mini9.jpg'; 
import mini11 from '../assets/images/product_mini10.jpg';
import mini12 from '../assets/images/product_mini10.webp';
import mini13 from '../assets/images/product_mini11.jpg';
import mini14 from '../assets/images/product_mini12.jpg';
import mini15 from '../assets/images/product_mini13.jpg'; 
import mini16 from '../assets/images/product_mini14.jpg'; 
import mini17 from '../assets/images/product_mini15.webp'; 
import mini18 from '../assets/images/product_mini16.jpg';
import mini19 from '../assets/images/product_mini17.webp';
import mini20 from '../assets/images/product_mini18.webp'; 

let productsmini = [
    {id:1, name: "Camila Puff Sleeve Dress", price: 7590, sku: "159291-2024-133-1", image: mini5, relatedImages: [mini4, mini1], colors: ["#809bce", "#a7cec9", "#e7c6ff"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:2, name: "Ella Frill Short Dress", price: 7490, sku: "159291-2024-133-2", image: mini6 , relatedImages: [mini6_img2, mini6_img3], colors: ["#e06c71", "#f6f7b0", "#bc85a3"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:3, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-3", image: mini7 , relatedImages: [mini7_img2, mini7_img3], colors: ["#bc85a3", "#000000", "#faf9f6"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:4, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-4", image: mini8, relatedImages: [mini4, mini1], colors: ["#faf9f6", "#e7c6ff", "#000000"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:5, name: "Flare and Flair Dress", price: 7590, sku: "159291-2024-133-5", image: mini1 , relatedImages: [mini4, mini1], colors: ["#000000", "#FFFFFF", "#a7cec9"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:6, name: "Ella Frill Short Dress", price: 7490, sku: "159291-2024-133-6", image: mini2 , relatedImages: [mini4, mini1], colors: ["#000000", "#acb5af", "#d2a3a9"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:7, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-7", image: mini3 , relatedImages: [mini4, mini1], colors: ["#809bce", "#b8e0d2", "#f6f7b0"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:8, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-8", image: mini4, relatedImages: [mini4, mini1], colors: ["#bc85a3", "#000000", "#b1cfeb"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:9, name: "Flare and Flair Dress", price: 7590, sku: "159291-2024-133-9", image: mini9 , relatedImages: [mini4, mini1], colors: ["#faf9f6", "#e7c6ff", "#000000"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...",  available: true },
    {id:10, name: "Ella Frill Short Dress", price: 7490, sku: "159291-2024-133-10", image: mini10 , relatedImages: [mini4, mini1], colors: ["#000000", "#FFFFFF", "#a7cec9"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...",  available: true },
    {id:11, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-11", image: mini11 , relatedImages: [mini4, mini1], colors: ["#faf9f6", "#e7c6ff", "#000000"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:12, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-12", image: mini12, relatedImages: [mini4, mini1], colors: ["#809bce", "#b8e0d2", "#f6f7b0"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:13, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-13", image: mini13 , relatedImages: [mini4, mini1], colors: ["#000000", "#FFFFFF", "#e06c71"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:14, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-14", image: mini14, relatedImages: [mini4, mini1], colors: ["#bc85a3", "#000000", "#b1cfeb"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...",  available: true },
    {id:15, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-15", image: mini15 ,relatedImages: [mini4, mini1], colors: ["#faf9f6", "#e7c6ff", "#000000"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:16, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-16", image: mini16, relatedImages: [mini4, mini1], colors: ["#000000", "#acb5af", "#d2a3a9"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:17, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-17", image: mini17 , relatedImages: [mini4, mini1], colors: ["#000000", "#FFFFFF", "#a7cec9"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:18, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-18", image: mini18, relatedImages: [mini4, mini1], colors: ["#809bce", "#b8e0d2", "#f6f7b0"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:19, name: "Clara Layer Short Dress", price: 6790, sku: "159291-2024-133-19", image: mini19 , relatedImages: [mini4, mini1], colors: ["#bc85a3", "#000000", "#b1cfeb"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true },
    {id:20, name: "Molly Button Down Midi Dress", price: 6990, sku: "159291-2024-133-20", image: mini20, relatedImages: [mini4, mini1], colors: ["#faf9f6", "#e7c6ff", "#000000"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", available: true }
  ];

export default productsmini;