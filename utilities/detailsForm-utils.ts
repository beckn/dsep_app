import { ShippingFormData } from "../pages/checkoutPage";

export interface FormErrors {
  name?: string;
  mobileNumber?: string;
  email?: string;
  address?: string;
  pinCode?: string;
}

export const validateForm = (formData: ShippingFormData): FormErrors => {
  const errors: FormErrors = {};

  if (formData.name.trim() === "") {
    errors.name = "errorName";
  }

  if (formData.mobileNumber.trim() === "") {
    errors.mobileNumber = "errorNumber";
  } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
    errors.mobileNumber = "errorNumber2";
  }

  if (formData.email.trim() === "") {
    errors.email = "errorEmail";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
    errors.email = "errorEmail2";
  }

  if (formData.address.trim() === "") {
    errors.address = "errorAddress";
  }

  if (formData.pinCode.trim() === "") {
    errors.pinCode = "errorZipcode";
  } else if (!/^\d{6}$/.test(formData.pinCode)) {
    errors.pinCode = "errorZipcode2";
  }

  return errors;
};
