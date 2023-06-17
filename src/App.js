 import React, { useState } from 'react';
 import "./styles.css"

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }else if (!/^[A-Za-z]+$/.test(name)){
        errors.name='Invalid name format enter only character';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!rollNo) {
      errors.rollNo = 'Roll number is required';
    } else if (!/^\d+$/.test(rollNo)) {
      errors.rollNo = 'Roll number should be numeric';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {  //check if there are no validation errors in the errors object  
      
      alert(`Name: ${name}\nEmail: ${email}\nRoll No: ${rollNo}`);
    }
  };

  return (
    <div>
        <div id='form'>
      <h2><center> FORM VALIDATION</center></h2>
      </div>
      <form>
        <div>
        <center>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} //take text as input type and store the name in value
            onChange={(e) => setName(e.target.value)}//here event handler 'onChange'update the name when new value insert
          />                                          
          {errors.name && <span>{errors.name}</span>} 
          </center> 
        </div>

        <div>
            <center>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email"value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
          </center>
        </div>

        <div>
            <center>
          <label htmlFor="rollNo">Roll No:</label>
          <input type="text" id="rollNo" value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          {errors.rollNo && <span>{errors.rollNo}</span>}
         </center>
        </div>
       
         <center>
        <button type="button" id='Submit' onClick={validateForm}>
         Submit
        </button>
        </center>
        
      </form>
    </div>
  );
};
export default FormValidation;
