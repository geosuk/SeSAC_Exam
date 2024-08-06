import React from 'react';

const Food = ({ food }) => {
    return (
            <p>내가 제일 좋아하는 음식은
               <span style={{color: 'red'}}>{food}</span>
            </p>
    )
}
Food.defaultProps = {
    food : '짜장'
}

export default Food;