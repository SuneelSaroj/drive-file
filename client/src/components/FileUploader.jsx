import React, { useEffect, useState } from "react";
import axios from "axios";
import useDrivePicker from "react-google-drive-picker";
// import "./App.css"; // Ensure this is imported

const FileUploader = () => {
  const [openPicker, data] = useDrivePicker(); // Removed authResponse
  const [token, setToken] = useState("");

  const handlePicker = async () => {
    if (!token) {
      try {
        const response = await axios.get("http://localhost:5002/getAuthURL");
        const authUrl = response.data;
        const popup = window.open(authUrl, "_blank", "width=500,height=600");

        const interval = setInterval(async () => {
          try {
            if (popup.closed) {
              clearInterval(interval);

              const redirectedUrl = popup.location.href;
              const urlParams = new URLSearchParams(
                new URL(redirectedUrl).search
              );
              const code = urlParams.get("code");

              if (code) {
                const tokenResponse = await axios.post(
                  "http://localhost:5002/getToken",
                  { code }
                );
                setToken(tokenResponse.data.access_token);

                openPicker({
                  clientId:
                    "944473553549-pbvgvjvoco7eprfujdqfelri2to0nmia.apps.googleusercontent.com",
                  developerKey: "AIzaSyB-CcGtsufI9RtpReZHWpa1CVIiRw0ky54",
                  viewId: "DOCS",
                  showUploadFolders: true,
                  showUploadView: true,
                  supportDrives: true,
                  multiselect: true,
                  token: tokenResponse.data.access_token, // Pass the OAuth2 token here
                });
              } else {
                console.error("No code found in popup redirect URL");
              }
            }
          } catch (error) {
            console.log("Waiting for user authentication...");
          }
        }, 1000);
      } catch (error) {
        console.error("Error opening authentication URL:", error);
      }
    } else {
      openPicker({
        clientId:
          "944473553549-pbvgvjvoco7eprfujdqfelri2to0nmia.apps.googleusercontent.com",
        developerKey: "AIzaSyB-CcGtsufI9RtpReZHWpa1CVIiRw0ky54",
        viewId: "DOCS",
        showUploadFolders: true,
        showUploadView: true,
        supportDrives: true,
        multiselect: true,
        token: token, // Use existing token
      });
    }
  };

  useEffect(() => {
    if (data) {
      data.docs.forEach((doc) => console.log(doc));
    }
  }, [data]);

  return (
    <div className="upload">
      <button onClick={handlePicker}>Connect</button>
    </div>
  );
};

export default FileUploader;
