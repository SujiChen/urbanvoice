const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Save form data to a file or database if needed
  // Trigger the Selenium script
  exec("python3 automated_form.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return res.status(500).send("Error submitting the form.");
    }
    console.log(`Script output: ${stdout}`);
    res.send("Form submitted successfully!");
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
const cors = require("cors");
app.use(cors()); // Enable CORS for all routes
