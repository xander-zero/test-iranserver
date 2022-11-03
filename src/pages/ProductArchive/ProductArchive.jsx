import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Typography from "../../Common/Typography/Typography";
import Table from "../../components/Table/Table";
import Tbody from "../../components/Table/Tbody";
import Thead from "../../components/Table/Thead";
import { allProducts } from "../../redux/action/product";

// import { allProducts } from "../../redux/action/product";
import { tableData } from "./mock/tableData";

const ProductArchive = () => {
  const [header] = useState(tableData);

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
    </div>
  );
};

export default ProductArchive;
