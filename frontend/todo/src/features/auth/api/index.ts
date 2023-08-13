import { axiosInstance } from "../../../core/config/axiosInstance";
import { loginDataType } from "../pages/LandingPage";

export const loginApi = async(data: loginDataType) => {
  return axiosInstance.post("/login", data);
};
