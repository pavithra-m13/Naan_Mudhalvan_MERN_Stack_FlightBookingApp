// import React, { useContext } from 'react';
// import { GeneralContext } from '../context/GeneralContext';
// import '../styles/Register.css';
// const Register = ({ setIsLogin }) => {
//   const { setUsername, setEmail, setPassword, setUsertype, register} = useContext(GeneralContext);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     await register();
//   };

//   return (
//     <body className='register'>    <form className="registerForm">
//       <h2 className='h2'>Register</h2>
//       <div className="form-floating mb-3 registerFormInput">
//         <input type="text" className="form-control1" id="registerUsername" placeholder="username"
//                onChange={(e) => setUsername(e.target.value)} />
//         <label  htmlFor="registerUsername">Username</label>
//       </div>
//       <div className="form-floating mb-3 registerFormInput">
//         <input type="email" className="form-control1" id="registerEmail" placeholder="name@example.com"
//                onChange={(e) => setEmail(e.target.value)} />
//         <label htmlFor="registerEmail">Email address</label>
//       </div>
//       <div className="form-floating mb-3 registerFormInput">
//         <input type="password" className="form-control1" id="registerPassword" placeholder="Password"
//                onChange={(e) => setPassword(e.target.value)} />
//         <label htmlFor="registerPassword">Password</label>
//       </div>
//       <select className="form-select1 form-select-lg mb-3 registerSelect" aria-label="User type"
//               onChange={(e) => setUsertype(e.target.value)}>
//         <option value="">User type</option>
//         <option value="admin">Admin</option>
//         <option value="customer">Customer</option>
//         <option value="flight-operator">Flight Operator</option>
//       </select>
//       <button type="submit" className="btn registerButton" onClick={handleRegister}>Sign up</button>
//       <p>Already registered? <span className="toggleLogin" onClick={() => setIsLogin(true)}>Login</span></p>
//     </form>
//     </body>

//   );
// };

// export default Register;


import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/Register.css';

const Register = ({ setIsLogin }) => {
  const { setUsername, setEmail, setPassword, setUsertype, register } = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  };

  return (
    <body className='registerPage'>
      <form className="registrationForm">
        <h2 className='formTitle'>Register</h2>
        <div className="formGroup">
          <input type="text" className="inputField" id="usernameInput" placeholder="Username"
                 onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="usernameInput" className="inputLabel">Username</label>
        </div>
        <div className="formGroup">
          <input type="email" className="inputField" id="emailInput" placeholder="Email address"
                 onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="emailInput" className="inputLabel">Email address</label>
        </div>
        <div className="formGroup">
          <input type="password" className="inputField" id="passwordInput" placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="passwordInput" className="inputLabel">Password</label>
        </div>
        <select className="inputSelect" id="userTypeSelect" aria-label="User type"
                onChange={(e) => setUsertype(e.target.value)}>
          <option value="">User type</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
          <option value="flight-operator">Flight Operator</option>
        </select>
        <button type="submit" className="submitButton" onClick={handleRegister}>Sign up</button>
        <p className="loginPrompt">Already registered? <span className="loginToggle" onClick={() => setIsLogin(true)}>Login</span></p>
      </form>
    </body>
  );
};

export default Register;
