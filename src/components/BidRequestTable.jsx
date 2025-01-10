/* eslint-disable react/prop-types */
import { format } from "date-fns"

export default function BidRequestTable({ bid, handlerStatusChange }) {

    // eslint-disable-next-line no-unused-vars
    const { _id, title, deadline, price, category, status, email } = bid
    // console.log(title, deadline, price, category, status, email);

    return (
        <tr>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {title}
            </td>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {email}
            </td>

            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {bid.deadline ? format(new Date(bid.deadline), 'MMMM dd, yyyy') : 'N/A'}
            </td>

            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                ${price}
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-2'>

                    <p
                        className={`px-3 py-1 text-xs rounded-full 

                              ${bid.category === 'Web Development' ? 'text-blue-500 bg-blue-100/60'
                                : bid.category === 'Graphic Design' ? 'text-red-500 bg-red-100'
                                    : bid.category === 'Digital Marketing' ? 'text-green-500 bg-green-100/60' :
                                        'text-red-500 bg-red-100/60'

                            }`}
                    >
                        {bid.category ? bid.category : 'Unknown'}

                    </p>

                </div>
            </td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                    <span className='h-1.5 w-1.5 rounded-full bg-green-500'></span>
                    <h2 className='text-sm font-normal '> {status} </h2>
                </div>
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-6'>

                    {/* accept button */}
                    <button
                        disabled={status === 'In Progress' || status === 'Completed'}
                        onClick={() => handlerStatusChange(_id, status, "In Progress")}
                        className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 12.75 6 6 9-13.5'
                            />
                        </svg>
                    </button>

                    {/* Rejected button */}
                    <button
                        disabled={status === 'Rejected' || status === 'Completed'}
                        onClick={() => handlerStatusChange(_id, status, "Rejected")}
                        className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                            />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>

    )
}
