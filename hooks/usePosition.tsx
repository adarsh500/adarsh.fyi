"use client";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const usePosition = () => {
  const [position, setPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setPosition(position);
  };
  const debouncedScroll = useDebounce(handleScroll, 10);

  useEffect(() => {
    document.addEventListener("scroll", debouncedScroll);

    return () => {
      document.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return position;
};

export default usePosition;
