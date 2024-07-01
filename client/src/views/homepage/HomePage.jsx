import React from 'react'
import Header from '../../components/header/Header'
import JobList from '../../components/joblist/JobList'
import Hero from '../../components/hero/Hero'

const HomePage = () => {
  return (
    <div className='bg-purple-200 '>
      <Header />
      <Hero />
      <JobList />
    </div>
  )
}

export default HomePage