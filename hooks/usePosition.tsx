"use client";
import { useCallback, useEffect, useState } from "react";

const usePosition = () => {
  const [position, setPosition] = useState<number>(0);

  const handleScroll = useCallback(() => {
    setPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export default usePosition;
