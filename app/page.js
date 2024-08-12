"use client";

import "./globals.css";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import { auth } from "./utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setAuthenticated(true);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <Chatbot />;
}
