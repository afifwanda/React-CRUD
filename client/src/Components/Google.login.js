import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToken, deleteToken } from '../Store/action';

const CLIENT_ID = '134915435588-pkb1fskqck8mfu05cf9hofskkqomf7qk.apps.googleusercontent.com';

function GoogleButton(){
  const [isLogin,setIsLogin] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const checkToken = useSelector(state=>state.reducer.token)

  const login = (response) =>{
    if(response.accessToken){
      setIsLogin(true) 
      dispatch(addToken(response.accessToken))
    }
  }

  checkToken != null ? history.push('/admin') :  history.push('/login')

  const logout = (response) =>{
    setIsLogin(false) 
    dispatch(deleteToken())
  }

  const loginfailed = (response) =>{
    alert('Failed to log in')
  }

  const logoutfailed = (response) =>{
    alert('Failed to log out')
  }
  
  return(
    <div>
      { isLogin ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ logout }
          onFailure={ logoutfailed }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ login }
          onFailure={ loginfailed }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
    </div>
  )
}

export default GoogleButton