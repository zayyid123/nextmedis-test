import { axiosInstance } from "@/config/axiosConfig";

export const getAllUserServices = async (page: string = "1") => {
  const response = await axiosInstance.get(`/api/users?page=${page}`);
  return response;
};

export const getDetailUsersServices = async (id: string) => {
  const response = await axiosInstance.get(`/api/users/${id}`);
  return response;
};

export const createUsersServices = async (data: {
  first_name: string;
  last_name: string;
  email: string;
}) => {
  const response = await axiosInstance.post(`/api/users`, data);
  return response;
};

export const editUsersServices = async (
  id: string,
  data: {
    first_name: string;
    last_name: string;
    email: string;
  }
) => {
  const response = await axiosInstance.put(`/api/users/${id}`, data);
  return response;
};
