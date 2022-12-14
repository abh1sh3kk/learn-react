import React from "react";
import Form from "./Components/Form"

function App() {

  let theData = {
    "name": "Nobody", 
    "address": "Nowhere",
    "tel-number": 987654321,
    "country-code": "+977",
    "isStudent": true,
    "favorites": ["Chair", "Table", "Aeroplane", "Milky Way Galaxy"],
    "birthYear": 1980,

  };
  const [formData, setFormData] = React.useState(theData);

  function handleChange(event){
    setFormData(oldData => {
      return ({
        ...oldData,
        [event.target.name]: event.target.value
      });
    })
  }
	let jsonOutput = Object.keys(formData).map((property, index) => {
		return (<pre className="output" key={index}>{`${property}: ${formData[property]}`}</pre>)
	})

  return (
    <div className="App">

    {jsonOutput}
    <hr />
    <Form formData={formData} handleChange={handleChange}/>
    </div>
  );
}

export default App;
