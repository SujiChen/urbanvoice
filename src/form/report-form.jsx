import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../login/firebase.js'; // Import Firestore instance
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./report-form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    potholeLocation: "",
    locationDetails: "",
    potholeSize: "",
    definedShape: "",
    additionalInfo: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Save form data to Firestore
        const docRef = await addDoc(collection(db, "reports"), formData);
        alert("Form submitted successfully! Document ID: " + docRef.id);
      // const response = await fetch("http://localhost:5000/submit-form", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   alert("Form submitted successfully!");
      // } else {
      //   alert("Failed to submit the form.");
      // }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">First Name</FormLabel>
        <TextField
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Last Name</FormLabel>
        <TextField
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Pothole Location</FormLabel>
        <RadioGroup
          name="potholeLocation"
          value={formData.potholeLocation}
          onChange={handleRadioChange}
          required
        >
          <FormControlLabel value="alley" control={<Radio />} label="Alley" />
          <FormControlLabel value="crosswalk" control={<Radio />} label="Crosswalk" />
          <FormControlLabel value="curblane" control={<Radio />} label="Curb Lane" />
          <FormControlLabel value="intersection" control={<Radio />} label="Intersection" />
          <FormControlLabel value="trafficlane" control={<Radio />} label="Traffice Lane" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Location Details</FormLabel>
        <TextareaAutosize
          id="locationDetails"
          name="locationDetails"
          value={formData.locationDetails}
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Pothole Size</FormLabel>
        <RadioGroup
          name="potholeSize"
          value={formData.potholeSize}
          onChange={handleRadioChange}
          required
        >
          <FormControlLabel value="small" control={<Radio />} label="Small" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="large" control={<Radio />} label="Large" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Defined Shape</FormLabel>
        <RadioGroup
          name="definedShape"
          value={formData.definedShape}
          onChange={handleRadioChange}
          required
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Additional Info</FormLabel>
        <TextareaAutosize
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl component="fieldset" className="form-control">
        <FormLabel component="legend">Email Address</FormLabel>
        <TextField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submit-button"
      >
        Submit Report
      </Button>
    </form>
  );
}
