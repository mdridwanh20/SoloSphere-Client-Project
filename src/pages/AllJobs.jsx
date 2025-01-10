/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import axios from 'axios';

const AllJobs = () => {

  const [jobs, setJobs] = useState([]);
  // filter jobs
  const [jobFilter, setJobsFilter] = useState("")
  // search filter:
  const [search, setSearch] = useState(" ")
  // sort here
  const [sort, setSort] = useState(" ")

  useEffect(() => {

    const fetchAllJobs = async () => {
      const { data } = await axios.get(`http://localhost:5000/all-jobs?filter=${jobFilter}&search=${search}&sort=${sort}`)
      setJobs(data)
    }

    fetchAllJobs()
  }, [jobFilter, search, sort])

  const handlerReset = () => {
    setJobsFilter('')
    setSearch('')
    setSort('')
  }

  // console.log(sort);

  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              name='category'
              id='category'
              onChange={(e) => setJobsFilter(e.target.value)}
              className='border p-4 rounded-lg'

            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>


          <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
            <input
              className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
              type='text'
              name='search'
              onBlur={(e) => setSearch(e.target.value)}
              placeholder='Enter Job Title'
              aria-label='Enter Job Title'
            />

            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
              Search
            </button>
          </div>

          <div>
            <select
              name='category'
              id='category'
              onChange={(e) => setSort(e.target.value)}
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handlerReset} className='btn'>Reset</button>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

          {
            jobs.length > 0 ?
              (
                jobs.map((job) => <JobCard
                  key={job._id}
                  job={job}></JobCard>)
              )
              :
              (
                <p className="col-span-full text-center text-gray-500">No data in this category</p>
              )
          }
        </div>

      </div>
    </div>
  )
}

export default AllJobs
