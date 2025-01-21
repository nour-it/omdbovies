import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export let URLS = {
  home       : "/",
  member     : "/member/:id",
  groups     : "/groups/:id",
  message    : "/message/:id",
  profile    : "/profile/:id",
  codeScanner: "/qrcodescanner",
}

export const usePreviousUrl = () => {
  const location = useLocation(); // Get the current location
  const prevLocationRef = useRef(null); // Use a ref to store the previous location

  useEffect(() => {
    // Update the ref with the current location pathname
    prevLocationRef.current = location.pathname;
  }, [location]); // Run the effect whenever the location changes

  return prevLocationRef.current;
};
