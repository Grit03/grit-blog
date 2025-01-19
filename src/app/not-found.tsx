"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    redirect("/");
  });
  return null;
}

export default NotFoundPage;
