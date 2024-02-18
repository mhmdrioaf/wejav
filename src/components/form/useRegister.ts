"use client";

import React from "react";

export default function useRegister() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<{
    success: boolean;
    error: string | null;
  }>({
    success: false,
    error: null,
  });

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      console.log(formData);
      setIsLoading(false);
      setResponse({
        success: true,
        error: null,
      });
    } catch (error) {
      setIsLoading(false);
      setResponse({
        success: false,
        error: "Terjadi kesalahan ketika mendaftarkan pengguna.",
      });
      console.error("An error occurred when creating user data: ", error);
    }
  }

  return {
    isLoading,
    response,
    handleSubmit,
  };
}
