import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthConetxt';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import recruiterServices from '../../services/recruiterServices';

const JobForm = () => {

    const navigate=useNavigate();
    const loc=useLocation();
    const { userData,loggedIn,setLocation } = useAuth();
    const [error,setError]=useState();
    useEffect(()=>{
        console.log("hello",loggedIn);
        setLocation(loc.pathname);
        if(!loggedIn){
            navigate('/login-recruiter');
        }
    })

    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        location: '',
        jobType: 'full-time',
        workMode: 'onsite',
        responsibilities: '',
        requirements: '',
        CTC: '',
        stipend: '',
        yearsOfExperience: '',
        jobVisibility: 'public'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Logic to handle form submission
        try {
            const response=await recruiterServices.addJob(formData);
            console.log(formData);
            if(response.status===201){
                setFormData({
                    jobTitle: '',
            jobDescription: '',
            location: '',
            jobType: 'full-time',
            workMode: 'onsite',
            responsibilities: '',
            requirements: '',
            CTC: '',
            stipend: '',
            yearsOfExperience: '',
            jobVisibility: 'public'
                })
            }
            else{
                new Error('Cannot add job successfully');
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className='rounded-lg border border-gray-200 bg-white m-2 flex flex-col'>
            <div className="flex justify-between p-3">
                <div className="text-sm flex items-center">
                    <span className='font-semibold'>Back</span>
                    <span className='px-3 font-semibold'>-</span>
                    <span className='text-xs font-display'>Job List / Create Job</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <button className='rounded-lg border border-gray-300 bg-white p-2 font-display text-black text-xs font-medium shadow-sm'>Save as draft</button>
                    <button className='rounded-lg border border-orange-600 bg-orange-500 p-2 font-display text-white text-xs shadow-sm' onClick={handleSubmit}>
                        Publish Now
                    </button>
                </div>
            </div>
            <div className="border-b border-gray-300 shadow-md"></div>
            <div className="p-4 flex">
                <div className="flex flex-col gap-4 w-3/5">
                    <h1 className="text-lg font-display font-semibold">Create Job</h1>

                    <input type='text' value={userData.companyId} hidden />

                    <div className="flex flex-col font-display">
                        <label htmlFor="jobTitle" className='text-md'>Job Title</label>
                        <input
                            type="text"
                            id='jobTitle'
                            name='jobTitle'
                            placeholder='Senior Software Developer'
                            className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                            value={formData.jobTitle}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col font-display">
                        <label htmlFor="jobDescription" className='text-md'>Job Description</label>
                        <textarea
                            id='jobDescription'
                            name='jobDescription'
                            placeholder='Job description...'
                            className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                            value={formData.jobDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col font-display">
                        <label htmlFor="location" className='text-md'>Location</label>
                        <input
                            type="text"
                            id='location'
                            name='location'
                            placeholder='Bhubaneswar'
                            className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col font-display">
                        <label htmlFor="jobType" className='text-md pb-4'>Employment Type</label>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="radio"
                                    id='part-time'
                                    name='jobType'
                                    value='part-time'
                                    checked={formData.jobType === 'part-time'}
                                    onChange={handleChange}
                                    className='mx-2 text-orange-400'
                                />
                                <label htmlFor="part-time" className='text-md'>Part-time</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id='full-time'
                                    name='jobType'
                                    value='full-time'
                                    checked={formData.jobType === 'full-time'}
                                    onChange={handleChange}
                                    className='mx-2 text-orange-400'
                                />
                                <label htmlFor="full-time" className='text-md'>Full-time</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id='internship'
                                    name='jobType'
                                    value='internship'
                                    checked={formData.jobType === 'internship'}
                                    onChange={handleChange}
                                    className='mx-2 text-orange-400'
                                />
                                <label htmlFor="internship" className='text-md'>Internship</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col font-display">
                        <label htmlFor="workMode" className='text-md pb-4'>Work Mode</label>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="radio"
                                    id='remote'
                                    name='workMode'
                                    value='remote'
                                    checked={formData.workMode === 'remote'}
                                    onChange={handleChange}
                                    className='mx-2 text-orange-400'
                                />
                                <label htmlFor="remote" className='text-md'>Remote</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id='onsite'
                                    name='workMode'
                                    value='onsite'
                                    checked={formData.workMode === 'onsite'}
                                    onChange={handleChange}
                                    className='mx-2 text-orange-400'
                                />
                                <label htmlFor="onsite" className='text-md'>Onsite</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col font-display">
                        <label htmlFor="responsibilities" className='text-md'>Responsibilities</label>
                        <textarea
                            id='responsibilities'
                            name='responsibilities'
                            placeholder='Responsibilities...'
                            className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                            value={formData.responsibilities}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col font-display">
                        <label htmlFor="requirements" className='text-md'>Requirements</label>
                        <textarea
                            id='requirements'
                            name='requirements'
                            placeholder='Requirements...'
                            className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                            value={formData.requirements}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex justify-between gap-2">
                        {formData.jobType === 'full-time' && (
                            <div className="flex flex-col font-display w-1/2">
                                <label htmlFor="CTC" className='text-md'>CTC</label>
                                <input
                                    type="number"
                                    id='CTC'
                                    name='CTC'
                                    placeholder='CTC in INR'
                                    className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                                    value={formData.CTC}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {formData.jobType === 'internship' && (
                            <div className="flex flex-col font-display w-1/2">
                                <label htmlFor="stipend" className='text-md'>Stipend</label>
                                <input
                                    type="number"
                                    id='stipend'
                                    name='stipend'
                                    placeholder='Stipend in INR'
                                    className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                                    value={formData.stipend}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="flex flex-col font-display w-1/2">
                            <label htmlFor="yearsOfExperience" className='text-md'>Years of Experience</label>
                            <input
                                type="number"
                                id='yearsOfExperience'
                                name='yearsOfExperience'
                                placeholder='Years of experience required'
                                className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-sm'
                                value={formData.yearsOfExperience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>


                    <div className="flex flex-col font-display">
                        <label htmlFor="jobVisibility" className='text-md'>Job Visibility</label>
                        <select
                            id='jobVisibility'
                            name='jobVisibility'
                            className='p-3 text-xs border border-gray-200 rounded-xl w-full drop-shadow-md'
                            value={formData.jobVisibility}
                            onChange={handleChange}
                        >
                            <option value='public'>Public</option>
                            <option value='private'>Private</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobForm;
