import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import Typography from "../../Common/Typography/Typography";
import { updatedProduct } from "../../redux/action/product";

const initialValue = {
  name: "",
  price: "",
  imageUrl: "",
};

const EditModal = ({ show, handleClose, productId }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(updatedProduct(form, productId));
  };

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <Typography className="header-modal">ویرایش محصول</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="namrProduct">نام محصول</label>
              <input
                type="text"
                className="form-control"
                id="namrProduct"
                onChange={handleChange}
                value={form.name}
                name="name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="priceProduct">قیمت</label>
              <input
                type="text"
                className="form-control"
                id="priceProduct"
                onChange={handleChange}
                value={form.price}
                name="price"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="imageUrl">لینک عکس</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                onChange={handleChange}
                value={form.imageUrl}
                name="imageUrl"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <Typography className="btn-modal">برگشت</Typography>
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            <Typography className="btn-modal">ویرایش</Typography>
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default EditModal;
