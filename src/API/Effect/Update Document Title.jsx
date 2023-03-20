import React, { useEffect } from "react";

export default function Update_Document_Title(Title) {
  // Title is a string
  useEffect(() => {
    document.title = Title;
  }, []);
} // End of Update_Document_Title
