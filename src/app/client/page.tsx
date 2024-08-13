"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Gifts from "@/layouts/gifts/Gifts";
import Blaze from "@/layouts/blaze/Blaze";

const Client = () => {
  const searchParams = useSearchParams();

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const getTheme = async () => {
      const domain = searchParams.get("domain");

      const res = await fetch(domain as string);
      if (!res.ok) return null;

      return res.json();
    };

    getTheme().then((res) => {
      setTheme(res?.data.theme.name);
    });
  }, [searchParams, setTheme]);

  console.log("theme", theme);

  if (theme === "Gifts") return <Gifts />;

  if (theme === "Blaze") return <Blaze />;

  return (
    <main
      style={{
        backgroundColor: "cyan",
        height: "50vh",
      }}
    >
      ClientTeam
    </main>
  );
};

export default Client;
