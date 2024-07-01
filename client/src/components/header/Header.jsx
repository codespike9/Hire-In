import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthConetxt';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(false);
  const { loggedIn, userData, logout } = useAuth();

  const signout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
  }

  const handleMenu = () => {
    console.log(isVisible)
    if (isVisible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }
  return (
    <>
      {isVisible && (
        <div className='fixed z-10 w-screen bg-white px-5 py-7'>
          <div className="flex justify-between">
            <a href="" className='flex flex-1 gap-1 items-center font-display font-semibold'>Hire<span className='font-bold bg-black text-white p-1'>in.</span></a>
            <button className="p-2 lg:hidden" onClick={handleMenu}>
              <i className="fa-solid fa-x text-gray-600"></i>
            </button>
          </div>

          <div className="flex flex-col gap-10 text-sm font-semibold p-4">
            <Link to={'/'}>Home</Link>
            <a href="">Category</a>
            {loggedIn && (userData.userRole!=="Recruiter") && (<Link to={{}}>Companies</Link>)}
            {!loggedIn && (<Link to={{}}>Companies</Link>)}
            {loggedIn && userData.userRole === "Recruiter" && (<Link to={'/add-job'}>Post a Job</Link>
            )}
            {!loggedIn && (<Link to={'/add-job'}>Post a Job</Link>
            )}            
            {loggedIn && (<a href="" onClick={signout}>Logout</a>
            )}
            {loggedIn && (<h1>hello {userData.userName}</h1>)}
            {!loggedIn && (<Link to={'/login'}>Login / Register</Link>)}
          </div>

          <div className='flex gap-2'>

            <Link className=' bg-black text-white text-xs px-4 py-3 rounded'>Recruiter</Link>
            <a href="" className=' bg-black text-white text-xs px-4 py-3 rounded '>
              Upload CV
            </a>
          </div>
        </div>
      )}

      {!isVisible && (
        <div className='px-5 pt-8 pb-6 md:px-10 flex justify-between items-center font-display '>

          <a href="" className='flex flex-1 gap-1 items-center font-display font-semibold'>Hire<span className='font-bold bg-black text-white p-1'>in.</span></a>

          <div className="hidden md:flex gap-10 text-sm font-medium items-center">
            <Link to={'/'}>Home</Link>
            <a href="">Category</a>
            {loggedIn && (userData.userRole!=="Recruiter") && (<Link to={{}}>Companies</Link>)}
            {!loggedIn && (<Link to={{}}>Companies</Link>)}
            {loggedIn && userData.userRole === "Recruiter" && (<Link to={'/add-job'}>Post a Job</Link>
            )}
            {!loggedIn && (<Link to={'/add-job'}>Post a Job</Link>
            )}
            {loggedIn && (userData.userRole!=="Recruiter") && (<Link to="" className='hidden lg:flex'>Latest Job</Link>)}
            {!loggedIn && (<Link to="" className='hidden lg:flex'>Latest Job</Link>)}
            {loggedIn && (<a href="" onClick={signout}>Logout</a>
            )}
            {loggedIn && (<h1 className='font-normal'>Hello-<span className='text-base font-mono'>{userData.userName}</span></h1>)}
            {!loggedIn && (<Link to={'/login'}>Login / Register</Link>)}
          </div>

          <div className='hidden md:flex flex-1 gap-2 justify-end'>

            <Link className=' bg-black text-white text-xs px-4 py-3 rounded' to={'/register-recruiter'}>Recruiter</Link>
            <a href="" className=' bg-black text-white text-xs px-4 py-3 rounded '>
              Upload CV
            </a>
          </div>

          <button className="p-2 flex flex-1 justify-end md:hidden" onClick={handleMenu}>
            <i className="fa-solid fa-bars text-gray-600"></i>
          </button>




        </div>
      )}

    </>
  )
}

export default Header