import { useState } from "react";
import Form from "../../components/Form/Form";
import HeaderForm from "../../components/Form/HeaderForm";
import InputField from "../../components/Form/InputField";

import { schemaValidationAuth } from "../../schema/schemaValidation";

const initialValue = {
  username: "",
  password: "",
};

const Auth = () => {
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = (userData) => {
    console.log(userData);
  };

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
            </Form>
          </div>
        </div>
      </div>
      <div className="col-md-4" style={{ backgroundColor: "blue" }}>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default Auth;
