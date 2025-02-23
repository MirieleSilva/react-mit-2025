import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormFeedback,Button } from "reactstrap";

const Feedback = () => {
const [formData, setFormData] = useState({
  email: "",
  userName: "",
  option: "",
  feedback: "",
})

const [options, setOptions] = useState([]);
const [error, setError] = useState(false);
const [feedbackPlaceholder, setFeedbackPlaceholder] = useState("Choose an option and enter your feedback");

  useEffect(() => {
    fetch("https://api.npoint.io/450f094116f649d0ee5f")
      .then((res) => res.json())
      .then((data) => setOptions(data.opcoes))
      .catch((error) => console.error("Error to load Jason:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    setError({...error, [e.target.name]: false });

  
    if (e.target.name === "option") {
      if (e.target.value === "Chose an subject"){
        setFeedbackPlaceholder("Choose an option and enter your feedback");
      } 
    const selectedOption = options.find((option) => option.id === Number(e.target.value));

    if (selectedOption) {
      setFeedbackPlaceholder(`Write your ${selectedOption.nome}`);
    }
}
}
  const handleSubmit = (e) => {
  e.preventDefault();
  let newErros = {};

  if (formData.userName === "") {
   newErros.userName = "Name is required";
  }
  if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    newErros.email = "Invalid email address";
  }
  if (formData.option === "" || formData.option === "Chose an subject") {
    newErros.option = "Please select an option";
  }
  if (formData.feedback === "") {
    newErros.feedback = "Feedback is required";
  }
  if (Object.keys(newErros).length > 0) {
    setError(newErros);
    return;
  }

  alert("Form submitted successfully!");

  setFormData({
    email: "",
    userName: "",
    option: "",
    feedback: ""
  });
  setError({});
  }
  

  return (
    <>
  <Form onSubmit={handleSubmit} className="form">
    <h1 className="text-center">Feedback</h1>
    <FormGroup>
    <Label for="userName">
      Name
    </Label>
    <Input
      id="userName"
      name="userName"
      placeholder="Your name"
      type="text"
      value={formData.userName}
      onChange={handleChange}
      invalid = {!!error.userName}
    />
    {error.userName && <FormFeedback>{error.userName}</FormFeedback>}
    </FormGroup>
    <FormGroup>
    <Label for="Email">
      Email
    </Label>
    <Input
      id="Email"
      name="email"
      placeholder="Your email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      invalid = {!!error.email}
    />
    {error.email && <FormFeedback>{error.email}</FormFeedback>}
  </FormGroup>

  <FormGroup>
    <Label for="Select">
    Subject
    </Label>
    <Input type="select" name="option" id="Select" value={formData.option} onChange={handleChange} invalid = {!!error.option}>
    <option >Chose an subject</option>
      {options.map((op) => (
        <option key={op.id} value={op.id}>
          {op.nome}
        </option>
      ))}
    </Input>
    {error.option && <FormFeedback>{error.option}</FormFeedback>}
  </FormGroup>

  <FormGroup>
    <Label for="Text">
      Feedback
    </Label>
      <Input
        id="Text"
        name="feedback"
        type="textarea"
        value={formData.feedback}
        onChange={handleChange} 
        placeholder={feedbackPlaceholder}
        invalid = {!!error.feedback}
      />
      {error.feedback && <FormFeedback>{error.feedback}</FormFeedback>}
  </FormGroup>
  <div className="text-center">
   <Button color="primary" type="submit" className="w-25 ">
        Enviar Feedback
   </Button>
   </div>
</Form>
</>
  );
};


export default Feedback;
