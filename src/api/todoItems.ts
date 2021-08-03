import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers.patch["Content-Type"] = "application/json";

export const getItems: Service_TodoItems.Actions["getItems"] = async () => {
  const response = await axiosInstance.get("/items");
  return response.data;
};
