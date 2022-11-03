import React from "react";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { separate } from "../../utils/separate";

const Tbody = ({ products }) => {
  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <tbody>
      {products.map((product, index) => (
        <tr key={product.id}>
          <th className="product-item" scope="row">
            {index + 1}
          </th>
          <td className="product-item">{product.name}</td>
          <td className="product-item">{separate(product.price)}</td>
          <td>
            <div className="d-flex items-center">
              <div className="icon mx-2">
                <AiOutlineEdit size={15} color="blue" />
              </div>
              <div className="icon mx-2">
                <AiOutlineDelete size={15} color="red" />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
