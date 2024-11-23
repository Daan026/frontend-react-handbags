import React from 'react';

const Article = ({productName, banner, price, img, alt}) => {


    return (
        <article>



            <img src={img} alt={alt}/>
            <p>{productName}</p>
            <span>{banner === "best" ? "Bestseller" : banner === "new" ? "New Collection" : banner}</span>
            <h4>{price}</h4>

        </article>
    );
};


export default Article;
