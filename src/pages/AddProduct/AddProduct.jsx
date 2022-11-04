import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { addProduct } from "../../redux/action/product";

import Form from "../../components/Form/Form";
import Typography from "../../Common/Typography/Typography";
import InputField from "../../components/Form/InputField";
import SubmitButton from "../../components/Form/SubmitButton";

const initialValue = {
  name: "",
  price: "",
  imageUrl: "",
};

const AddProduct = () => {
  // declare dispatch
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const locationPathname = useLocation();
  const productId = locationPathname.search.split("=")[1];

  const { products } = useSelector((state) => state.product);

  const findProduct = products?.find((item) => item.id == productId);
  console.log("findProduct", findProduct);

  const handleSubmit = (productData) => {
    dispatch(addProduct(productData, navigate));
  };

  return (
    <div className="m-3">
      <Typography>اضافه کردن محصول</Typography>
      <div className="form-container my-3">
        <Form
          initialValues={initialValue}
          onSubmit={(productData) => handleSubmit(productData)}
        >
          <InputField
            type="text"
            title="نام محصول"
            placeholder=""
            name="name"
          />
          <InputField
            type="text"
            title="قیمت محصول"
            placeholder=""
            name="price"
          />
          <InputField
            type="text"
            title="لینک عکس"
            placeholder=""
            name="imageUrl"
          />
          <SubmitButton title="افزودن" />
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
