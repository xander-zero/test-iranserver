import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { allProducts } from "../../redux/action/product";

import Typography from "../../Common/Typography/Typography";
import EditModal from "../../components/Modal/EditModal";
import Table from "../../components/Table/Table";
import Tbody from "../../components/Table/Tbody";
import Thead from "../../components/Table/Thead";

// import { allProducts } from "../../redux/action/product";
import { tableData } from "./mock/tableData";
import { closeModalEdit } from "../../redux/action/general";

const ProductArchive = () => {
  const [header] = useState(tableData);

  const { isOpenEditModal, productId } = useSelector((state) => state.general);

  // declare dispatch
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div className="m-3">
      <Typography>لیست محصولات</Typography>
      <Table>
        <Thead headerTitle={header} />
        <Tbody products={products} />
      </Table>

      {isOpenEditModal && (
        <EditModal
          show={isOpenEditModal}
          handleClose={() => dispatch(closeModalEdit())}
          productId={productId}
        />
      )}
    </div>
  );
};

export default ProductArchive;
