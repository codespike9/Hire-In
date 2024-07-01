import React from 'react'
import Header from '../../components/header/Header'
import JobForm from '../../components/jobCreation/JobForm'


const JobCreation = () => {
  return (
    <div>
        <Header/>
        <div className="bg-gray-50 rounded-lg border border-gray-100 m-3 flex justify-between">
            <div className='w-1/4 lg:w-1/6'></div>
            <div className="w-3/4 lg:w-5/6">
                <JobForm/>
            </div>
        </div>
    </div>
  )
}

export default JobCreation