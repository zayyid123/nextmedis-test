import { axiosInstance } from "@/config/axiosConfig";

export const getAllResourcesServices = async (page: string = "1") => {
  const response = await axiosInstance.get(`/api/resources?page=${page}`);
  return response;
};

export const getDetailResourceServices = async (id: string) => {
  const response = await axiosInstance.get(`/api/resources/${id}`);
  return response;
};
