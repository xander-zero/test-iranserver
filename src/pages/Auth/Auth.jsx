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
  username: "",
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
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="row vh-100">
      <div className="col-md-8 d-flex align-items-center justify-content-center">
        <div className="flex flex-col w-50">
          <HeaderForm />
          <div className="my-3">
            <Form
              initialValues={initialValue}
              onSubmit={(userData) => handleSubmit(userData)}
              validationSchema={schemaValidationAuth}
            >
              <InputField
                type="email"
                title="نام کاربری"
                placeholder="test@greenweb.ir"
                name="username"
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
      <div className="col-md-4 bgLogo" style={{ backgroundColor: "red" }}>
        <MainLogo />
      </div>
    </div>
  );
};

export default Auth;
