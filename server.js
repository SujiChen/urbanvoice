const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  console.log("Received form data");
  const { firstName, lastName, phone, comments } = req.body;
  const command = `python3 automated_form.py "${firstName}" "${lastName}" "${phone}" "${comments}"`;

  // Save form data to a file or database if needed
  // Trigger the Selenium script
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return res.status(500).send("Error submitting the form.");
    }
    console.log(`Script output: ${stdout}`);
    res.send("Form submitted successfully!");
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});
