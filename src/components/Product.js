import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Product = (curElem) => {
  const { id, title, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
        <div className="grid">
            <h3>{title}</h3>
            <div className="card-data-flex">
              <div>
              <del className="del-price">
                <FormatPrice price={price + 25} />
              </del>
               <p className="card-data--price">{<FormatPrice price={price}/>}</p>
              </div>
          
            <button className="custom-button">Ad To Cart </button>

            </div>
           
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  );
};


const Wrapper = styled.section`
.card-data-price {
  display: left;
}
.del-price{
  font-size: 15px;
  color: red;
}
.card-data--price {
  font-size: 20px;
  color: green;
}

/* Style for the button */
.custom-button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Hover effect */
.custom-button:hover {
  background-color: #45a049;
}

  
`;

export default Product;