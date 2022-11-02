import * as Yup from "yup";

export const schemaValidationAuth = Yup.object().shape({
  username: Yup.string()
    .required("پر کردن فیلد الزامی می باشد")
    .email("ایمیل معتبر نمی باشد"),
  password: Yup.string()
    .required("پر کردن فیلد الزامی می باشد")
    .min(4, "تعداد کاراکتر ها نباید کوچکتر از 4 باشد"),
});
