import React from 'react'
import HomePage from './views/homepage/HomePage'
import AllJobPage from './views/jobpage/AllJobPage'
import RegisterPage from './views/authenticationpage/RegisterPage'
import LoginPage from './views/authenticationpage/LoginPage'
import RecruiterRegistration from './views/authenticationpage/RecruiterRegistration'
import RecruiterLogin from './views/authenticationpage/RecruiterLogin'
import JobCreation from './views/recruiterDashboard/JobCreation'

import {BrowserRouter as Router,Route ,Routes} from "react-router-dom"
import { AuthProvider } from './contexts/AuthConetxt'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/jobs' element={<AllJobPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register-recruiter' element={<RecruiterRegistration/>} />
          <Route path='/login-recruiter' element={<RecruiterLogin/>} />
          <Route path='/add-job' element={<JobCreation/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App