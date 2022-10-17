import React from "react";

const Productcard = (props) => {
  const { product } = props
    return (
        <div>
            {product.name}
        </div>
    )
}

export default Productcard