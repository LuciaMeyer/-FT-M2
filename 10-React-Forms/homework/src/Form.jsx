import React from 'react';


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
  errors.username = 'Username is invalid';
  }
  if(!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid'
  }
  return errors;
};

export default function  Form () {

  const [input, setInput] = React.useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      // dependiendo del nombre asigna el valor
      // es igual q username: e.target.value pero haciendo esto cuando  
      // se dispare el onChange de cualquiera de los dos setearía siempre el mismo
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form>

      <div>
        <label>Username:</label>
        <input
          className={errors.username && 'danger'}
          type="text"
          name="username"
          value={input.username}
          onChange= {handleInputChange}
          />
        {errors.username && (<p className="danger">{errors.username}</p>)}
      </div>

      <div>
        <label>Password:</label>
        <input 
          className={errors.password && 'danger'}
          type="password"
          name="password"
          value={input.password}
          onChange= {handleInputChange}
          />
        {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>
        <input type="submit" value="submit" />
    </form>
  )
}
