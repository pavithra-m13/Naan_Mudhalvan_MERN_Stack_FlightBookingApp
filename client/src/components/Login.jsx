
// import React, { useContext } from 'react'
// import { GeneralContext } from '../context/GeneralContext';

// const Login = ({setIsLogin}) => {

//   const {setEmail, setPassword, login} = useContext(GeneralContext);

//   const handleLogin = async (e) =>{
//     e.preventDefault();
//     await login();
//   }
//   return (
//     <form className="authForm">
//         <h2>Login</h2>
//         <div className="form-floating mb-3 authFormInputs">
//             <input type="email" className="form-control" id="floatingInput" placeholder="example@example.com" 
//                                                                   onChange={(e) => setEmail(e.target.value)}  />
//             <label htmlFor="floatingInput">Email address</label>
//         </div>
//             <div className="form-floating mb-3 authFormInputs">
//             <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
//                                                                   onChange={(e) => setPassword(e.target.value)} /> 
//             <label htmlFor="floatingPassword" >Password</label>
//         </div>
//         <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>

//         <p>Not registered? <span onClick={()=> setIsLogin(false)}>Register</span></p>
//     </form>
//   )
// }
// export default Login

import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Login = ({ setIsLogin }) => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <form className="authForm">
      <h2>Login</h2>
      
      <div className="formGroup">
        <input
          type="email"
          className="formControl"
          id="floatingInput"
          placeholder=" " /* Empty placeholder for floating effect */
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput" className="labelFloating">Email address</label>
      </div>

      <div className="formGroup">
        <input
          type="password"
          className="formControl"
          id="floatingPassword"
          placeholder=" " /* Empty placeholder for floating effect */
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword" className="labelFloating">Password</label>
      </div>

      <button type="submit" className="authButton" onClick={handleLogin}>Sign in</button>

      <p>Not registered? <span onClick={() => setIsLogin(false)}>Register</span></p>
    </form>
  );
};

export default Login;
