import { getCookie } from "@api/cookie";
import { customAxios } from "@api/customAxios";

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => {
  customAxios.interceptors.request.use(
    (request) => {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        request.headers.Authorization = accessToken;
      }
      return request;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    },
  );

  return <>{children}</>;
};
