import { Link } from 'react-router-dom'
import { format } from 'date-fns'

// eslint-disable-next-line react/prop-types
const JobCard = ({ job }) => {

  const { _id, title, deadline, category, minPrice, maxPrice, description, Bid_count } = job || {}


  return (
    <Link
      to={`/job/${_id}`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {deadline ? format(new Date(deadline), 'MMMM dd, yyyy') : 'N/A'}
        </span>,
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description?.substring(0, 50)}...
        </p>
        <p className='mt-2 text-sm text-gray-600 '>
          <b>Range:</b> ${minPrice} - ${maxPrice}
        </p>
        <p className='mt-2 text-sm text-gray-600 '>
          <b>Total Bids: {Bid_count} </b> 
        </p>
      </div>
    </Link>
  )
}

export default JobCard
