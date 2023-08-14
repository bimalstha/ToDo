import { axiosInstance } from "../../../core/config/axiosInstance";

export const todoApi = () => {
  return axiosInstance.get("/task");
};
