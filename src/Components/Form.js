import React from 'react'
import "./../App.css"

function Form({formData, handleChange}) {

	function findType(data){
		console.log(typeof data)
		let theType = "text";
		switch (typeof data) {
			case "number": 
				theType = "number";
				break;
			case "array": 
				theType = "select";
				break;
			case "boolean":
				theType= "radio";  
		}
		console.log(theType);
		return theType;
	}	

	let inputField = Object.keys(formData).map((property, index) => {
		return (
			<label> 
				<input 
					type={findType(formData[property])} 
					name={property} 
					value={formData[property]} 
					key={index} 
					onChange={handleChange} 
					className="input" 
					checked = {findType(formData[property]) === "radio" && findType(formData[property])}
					placeholder={`Enter ${property}`} />
			</label>
			)
	})

	
	return (
		<div>
			{inputField}
		</div>
  )
}

export default Form