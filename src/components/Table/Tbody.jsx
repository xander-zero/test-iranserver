import React from "react";

import { useDispatch } from "react-redux";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { openModalEdit } from "../../redux/action/general";

import { removeProduct } from "../../redux/action/product";

import { separate } from "../../utils/separate";

const Tbody = ({ products }) => {
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleEdit = (product) => {
    dispatch(openModalEdit(product));
  };

  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <tbody>
      {products.map((product, index) => {
        return (
          <tr key={index}>
            <th className="product-item" scope="row">
              {index + 1}
            </th>
            <td className="product-item">
              <a href={product?.imageUrl} target="_blank" rel="noreferrer">
                <img
                  className="product-item-image"
                  src={product?.imageUrl}
                  alt={product?.name}
                />
              </a>
            </td>
            <td className="product-item">{product?.name}</td>

            <td className="product-item">{separate(product?.price)}</td>
            <td>
              <div className="d-flex items-center">
                <div className="icon mx-2">
                  <AiOutlineEdit
                    size={15}
                    color="blue"
                    onClick={() => handleEdit(product)}
                  />
                </div>
                <div className="icon mx-2">
                  <AiOutlineDelete
                    size={15}
                    color="red"
                    onClick={() => handleDelete(product?.id)}
                  />
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
