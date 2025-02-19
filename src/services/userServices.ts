import { axiosInstance } from "@/config/axiosConfig";

export const getAllUserServices = async (page: string = "1") => {
  const response = await axiosInstance.get(`/api/users?page=${page}`);
  return response;
};

export const getDetailUsersServices = async (id: string) => {
  const response = await axiosInstance.get(`/api/users/${id}`);
  return response;
};
