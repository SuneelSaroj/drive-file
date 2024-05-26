const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const credential = require("./credential.json");
require("dotenv").config();

const client_id = process.env.GOOGLE_OAUTH_CLIENT_ID;
const client_secret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const redirect_uri = credential.web.redirect_uris[0];

const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uri
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/getAuthURL", (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/drive.metadata.readonly",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
  res.send(authUrl);
});

app.post("/getToken", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).send("Code not found");
  }

  oauth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error("Error retrieving access token", err);
      return res.status(400).send("Error retrieving access token");
    }
    res.send(token);
  });
});

const port = 5002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
