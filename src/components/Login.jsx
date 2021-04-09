import React from 'react'
import axios from 'axios'

const Login =  () => {
  const handleLogin = async () => {
    try {
      let response = await axios({
        url: "http://65.0.223.149/api/v1/public/auth/signin/",
        method: "post",
        data: {
          grant_type: "password",
          client_id: "mobile-app",
          client_secret: "c5fab6c3-4262-4e3d-a032-d3e3dc3d73b0",
          email: "backend@dalkurd.com",
          password: "D41kurdFFMobi13App",
          scope: "openid profile",
        },
      });
      console.log("my data", response.data.data);
    } catch (error) {
      console.log('my error', error) 
    }
  }
  return (
    <div>
      <h2>Login page</h2>
      <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login
