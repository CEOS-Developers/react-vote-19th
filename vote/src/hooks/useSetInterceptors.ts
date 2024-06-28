import { getCookie } from "@api/cookie";
import { customAxios } from "@api/customAxios";
import { useLayoutEffect } from "react";

export default function useSetInterceptors() {
  useLayoutEffect(() => {
    const requestInterceptor = customAxios.interceptors.request.use(
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

    return () => {
      customAxios.interceptors.request.eject(requestInterceptor);
    };
  }, []);
}
