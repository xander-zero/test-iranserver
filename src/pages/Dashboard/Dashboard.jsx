import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import AddProduct from "../AddProduct/AddProduct";
import ProductArchive from "../ProductArchive/ProductArchive";

const Dashboard = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/list-products" element={<ProductArchive />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </MainLayout>
  );
};

export default Dashboard;
