const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// const auth = new google.auth.GoogleAuth({
//   keyFile: "/home/surya/Codes/sudd-backend/cred.json",
//   credentials: {
//     client_email: process.env.CLIENT_EMAIL,
//     client_id: "100218529717037346934",
//     private_key:
//       "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDqZ6vI/3z8SZ5m\nWyRSKJlvvRDF/Nj1Jck/s10dU+rEdwgiWkuQu7byNNroj4GtSyyaJkNS/GmJmlfk\nxsBhr+hiSXx+q8rrmb2egJ2gzmCL/EupckUFbtr8zYhsjyYjhohdqpAIxUU4Jvml\n401P2wrxxtLIgLqFB9vhygTrWS9Gq5FbCOx2Sr02rUw02ZifHj/R3vYC9VhRdc06\nmlZuNi73HrupfWJO4PgTKHyHIOQ14ITiZzt10O7n9fakP+R/4+DG5o4y6FbINiDA\n99mxvNy5XOP2dmla0M+WvH8NEfOvcnls3DQOgprYtZfjkfIQt5TdKSrhaHP4voLQ\nxUwclK2bAgMBAAECggEAPuVcac1sCwHx98MC5uyv5xSTGJz01iqyal5FYOYwe1D5\nJMaXuhk0SJ84EejXwdkG+cHElNLXuq1oYiGWY1/g+eZ/+jk8dKVHBO273fciXs1u\nu+PGc2PAbM71iTOL50Jk+sUWatQL87o5iHKKPyAmOqO/0T8BTUrDjD05vrCqh8pj\n89txNy4NOp6EBwMBkb063JW57+jWXeifLQDrBHG8Ka5xOPDkqRKBWjtwvQRnc9rM\ngmGFcSXKGb8cyv62zWTgfrszTcSUH8UTt5cAKeZsnrFHmt3/ePM8RBw9dqIHFMeA\n/apZXPRN6NeVDfo/BKyUhigrm0aj0qAoLsZo0hSjqQKBgQD6MTnqOxIFosnxeOF1\nbgxafHNnsg30BlQW/zgmBi58vM2YocaWtquRdAm0JPwMdFrfdLoqkQXcWR4oBAo8\nP7pr4+Qci/SSW8jMK1Lo46/VAAg6W/NSzJCN2j9nXP3CE9fb1Y+CDQXJWrSed1cQ\nvMQms2EUGBdqxbF6qhgWwXYadwKBgQDv2KDUgrYZF04+T0PnFgJ/2n/iulIVEsOJ\nKpFe7ZKr2GvLLrLEwLw6xvBjJC7/UgjHMzYSllZqrvgWr4gZ8ipj0OsmnxP//T7p\nsOaV6+38OLalq7mpHERnEnl9BuUS+xwNiduUkL3k2h5pbD18cW+482XbIubsGCmv\nO476ReMq/QKBgFnjecVX97+inx9sqMRCB5ozAFuPM0grRecFRy0SJ32Vb+CYrvrT\nIo0dvabFavEmlMeX7pMAi7SBKD6ERREkbFv7Aqfm+LXk2B3SqvUVaMUEP/CHvMJQ\n0NbGROVkGZ+y9Wj8L5UwDJYtSptskRFoYKju5cAMb81ivcMufX0fgMk9AoGAfQis\nhzyBG8F3i6oc1vo1YVuR8at6IPxALWCgmiE1phpTz39PuJxVRDrzlGuHiJjGdLow\nxS3UbRc7w+/L/uKs0I5YGDEz5u6pfoA3JQ7yaNtT9Df6uLtAuY77AH+4qdV4gWJN\nszxlkklXM1Q3FYm5WWyhu8SNJ6VNDcn5tmT6kS0CgYAjcr6HkwXh0eS1OG5FgzwL\nQa/SK9B8EFz+JFMORvqgJgWJvXVbrv4CGKdSdL+xZfx9eEHiYsrQ9KOF1BeHAALq\nhtF0zypI8tSr57Gor5rUJJ98xICspYanL7eJpHhJAjWo3bixSj9l6uRE4GefHfc7\nmxdeIG/mmLJZubNHn20vEA==\n-----END PRIVATE KEY-----\n",
//     private_key_id: "4228e57f4f69b76906f12cdd08bad400d05a8d62",
//   },
//   scopes: ["https://www.googleapis.com/auth/drive.file"],
// });
const credentials = require(path.join(__dirname, "../cred.json"));

const auth = new google.auth.GoogleAuth({
  credentials, // Pass the entire credentials object
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
