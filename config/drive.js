const { google } = require("googleapis");
const fs = require("fs");

const auth = new google.auth.GoogleAuth({
  keyFile: "/Users/mohamedkaif/Desktop/bc/cred.json",
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

const uploadFileToDrive = async (filePath, fileName) => {
  const fileMetadata = {
    name: fileName,
    parents: ["13xs9hPNKkxoL4qmE0AqXNFCa0HZGXN3J"],
  };

  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id",
  });

  return response.data.id;
};

module.exports = uploadFileToDrive;
