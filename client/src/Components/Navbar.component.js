import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteToken } from '../Store/action';
import swal from 'sweetalert'

import '../Styles/navbar.style.css';

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory()
  const dispatch = useDispatch()
  const checkToken = useSelector(state=>state.reducer.token)
  const logout = (response) =>{
    swal({
      title: "Are you sure want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willLogout) => {
      if (willLogout) {
        dispatch(deleteToken())
        history.push('/articles')
        swal("success!", {
          icon: "success",
        });
      } else {
        swal("canceled!");
      }
    });
  }

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <i className='fa fa-newspaper-o' />
              <div style={{marginLeft:6}}>
               RACL
              </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/articles" className='nav-links' onClick={closeMobileMenu}>
                Articles
              </Link>
            </li>
            {checkToken === null ?
              <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                  LOGIN
                </Link>
              </li> :
              <>
              <li className='nav-item'>
                <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                  Admin Page
                </Link>
              </li>
              <li className='nav-item' onClick={logout}>
                <div className='nav-links'>
                  LOGOUT
                </div>
              </li>
              </>
            }
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar