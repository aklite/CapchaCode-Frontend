import React, { useEffect } from "react";

function Update_Document_Title(Title) {
  // Title is a string
  useEffect(() => {
    document.title = Title;
  }, []);
} // End of Update_Document_Title

export default Update_Document_Title; // Exporting the function
