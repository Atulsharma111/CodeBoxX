'use client'

import React, { useEffect, useState, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children, ...props }: { children: ReactNode; [key: string]: any }) {

  const { user } = useUser();
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user]);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {});
      console.log(result);
      setUserDetail(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}

export default Provider;