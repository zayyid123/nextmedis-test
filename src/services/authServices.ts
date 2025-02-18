import { axiosInstance } from "@/config/axiosConfig";

export const loginServices = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/api/login", data);
  return response;
};

export const registerServices = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/api/register", data);
  return response;
};
