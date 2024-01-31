import React from 'react';


function Banner(){
    const imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/002/006/775/small_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"; 
    return (<div style={{width: '100%'}}>
        <img src={imageUrl} alt='Image not Found' />
    </div>)
}
export default Banner;