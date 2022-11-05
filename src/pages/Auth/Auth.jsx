import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreateAccount from "../../components/Form/CreateAccount";
import HeaderForm from "../../components/Form/HeaderForm";
import InputField from "../../components/Form/InputField";
import RememberMe from "../../components/Form/RememberMe";
import Form from "../../components/Form/Form";

import { schemaValidationAuth } from "../../schema/schemaValidation";
import { signInUser } from "../../redux/action/auth";
import { MainLogo } from "../../assets/icons/mainLogo";

const initialValue = {
  email: "",
  password: "",
};

const Auth = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  // declare dispatch
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    dispatch(signInUser(userData, navigate));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard/list-products");
    }
  }, [navigate]);

  return (
    <div className="row vh-100">
      <div className="form-login col-md-8 d-flex align-items-center justify-content-center">
        <div className="main-logo">
          <MainLogo color="#2343A3" />
        </div>
        <div className="form-content flex flex-col ">
          <HeaderForm />
          <div className=" my-3">
            <Form
              initialValues={initialValue}
              onSubmit={(userData) => handleSubmit(userData)}
              validationSchema={schemaValidationAuth}
            >
              <InputField
                type="email"
                title="نام کاربری"
                placeholder="test@greenweb.ir"
                name="email"
              />
              <InputField
                type={isShow ? "text" : "password"}
                title="رمز عبور"
                placeholder="*****************"
                icon={true}
                showIcon={() => setIsShow(!isShow)}
                isShowIcon={isShow}
                name="password"
              />
              <RememberMe label="برای دفعه ی بعدی مرا به خاطر بسپار" />
              <CreateAccount />
            </Form>
          </div>
        </div>
      </div>
      <div
        className="bgLogo col-md-4 col-12"
        style={{ backgroundColor: "red" }}
      >
        <MainLogo color="#fff" />
      </div>
    </div>
  );
};

export default Auth;
