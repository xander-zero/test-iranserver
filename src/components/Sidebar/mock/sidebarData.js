import { BsListCheck } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";

export const sidebarData = [
  {
    id: "1",
    display_name: "لیست محصولات",
    path_name: "/dashboard/list-products",
    icon: (color) => <BsListCheck color={color} size={20} />,
  },
  {
    id: "2",
    display_name: "افزودن محصول",
    path_name: "/dashboard/add-product",
    icon: (color) => <AiOutlineFolderAdd color={color} size={20} />,
  },
];
