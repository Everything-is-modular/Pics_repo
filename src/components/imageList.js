import React from 'react';
import  './imageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const images =  props.images.map(image => {
        return <ImageCard key={image.id} image={image} />
    });



    return <div className='image-list'>{images}</div>
};

export default ImageList


    // let hello_obj = {
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // let {a,b} = hello_obj;


    //    const images =  props.images.map(image=>{
//         return <img alt={image.description} key = {image.id}  src = {image.urls.regular} />
//     });

// const images =  props.images.map(({description , id , urls})=>{
//     return <img alt={description} key = {id}  src = {urls.regular} />
// });



