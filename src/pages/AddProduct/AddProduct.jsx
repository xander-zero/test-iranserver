import React from "react";

import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/action/product";

import Form from "../../components/Form/Form";
import Typography from "../../Common/Typography/Typography";
import InputField from "../../components/Form/InputField";
import SubmitButton from "../../components/Form/SubmitButton";

const initialValue = {
  name: "",
  price: "",
};

const AddProduct = () => {
  // declare dispatch
  const dispatch = useDispatch();

  const handleSubmit = (productData) => {
    dispatch(addProduct(productData));
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
          <SubmitButton title="افزودن" />
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
