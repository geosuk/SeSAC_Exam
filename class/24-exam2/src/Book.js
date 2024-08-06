import React from 'react'

const Book = ({img, title, author, price, type})=>{
    return(
        <div style={{backgroundColor : "beige", maxWidth : 500}}>
            <h2>이번주 베스트 셀러</h2>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>저자 : {author}</p>
            <p>판매가 : {price}</p>
            <p>구분 : {type}</p>
        </div>
    )
}
export default Book;
