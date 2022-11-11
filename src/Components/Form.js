import React from 'react'
import "./../App.css"

function Form({formData, handleChange}) {

	let inputField = Object.keys(formData).map((property, index) => {
		return (<input type="text" name={property} value={formData[property]} key={index} onChange={handleChange} className="input" placeholder={`Enter ${property}`} />)
	})

	
	return (
		<div>
			{inputField}
		</div>
  )
}

export default Form