import { axiosInstance } from "../../../core/config/axiosInstance";
import { addTaskDataTye } from "../data";

export const gettodoApi = () => {
  return axiosInstance.get("/gettask");
};

export const addTaskApi = (data: addTaskDataTye) => {
  return axiosInstance.post("/addtask", { ...data });
};
