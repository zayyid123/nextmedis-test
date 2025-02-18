import { axiosInstance } from "@/config/axiosConfig";

export const getAllUserServices = async () => {
  const response = await axiosInstance.get("/api/users");
  return response;
};

export const getDetailUsersServices = async (id: string) => {
  const response = await axiosInstance.get(`/api/users/${id}`);
  return response;
};
