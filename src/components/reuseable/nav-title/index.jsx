"use client";
import { useTitle } from "@/components/context/title";
import { useEffect } from "react";

export default function NavTitle({ title, subTitle }) {
  const { setTitle, setSubtitle } = useTitle();
  useEffect(() => {
    setTitle(title);
    setSubtitle(subTitle);
  }, [setTitle, setSubtitle]);
}
