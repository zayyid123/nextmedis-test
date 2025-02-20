import { axiosInstance } from "@/config/axiosConfig";

export const getAllResourcesServices = async (page: string = "1") => {
  const response = await axiosInstance.get(`/api/resources?page=${page}`);
  return response;
};

export const getDetailResourceServices = async (id: string) => {
  const response = await axiosInstance.get(`/api/resources/${id}`);
  return response;
};

export const createResourcesServices = async (data: {
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}) => {
  const response = await axiosInstance.post(`/api/resources`, data);
  return response;
};

export const editResourcesServices = async (
  id: string,
  data: {
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }
) => {
  const response = await axiosInstance.put(`/api/resources/${id}`, data);
  return response;
};

export const deleteResourcesServices = async (id: string) => {
  const response = await axiosInstance.delete(`/api/resources/${id}`);
  return response;
};
