import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import BidRequestTable from "../components/BidRequestTable";
import toast from "react-hot-toast";


const BidRequests = () => {

  const { user } = useContext(AuthContext)
  const [bidsReq, setBidsReq] = useState([]);
  useEffect(() => {
    fetchAllBids()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const fetchAllBids = async () => {
    const { data } = await axios.get(`http://localhost:5000/bid-request/${user?.email}`, { withCredentials: true })

    console.log(data);
    if (data) {
      setBidsReq(data)
    }
  }

  // action and delete function;
  const handlerStatusChange = async (id, prevStatus, status) => {
    console.table({ id, prevStatus, status });

    if (prevStatus === status || prevStatus === "Completed")
      return console.log('Not Allowed');


    // data patch here:
    try {
      const { data } = await axios.patch(`http://localhost:5000/bid-status-update/${id}`, { status })
      // refresh;
      fetchAllBids()
      toast.success(`Status Change To ${status}`, { position: 'top-center' })
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message, { position: 'top-center' })
    }

  }



  return (
    <section className='container px-4 mx-auto my-12'>
      <div className='flex items-center gap-x-3'>

        <h2 className='text-lg font-medium text-gray-800'> Bid Requests </h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {bidsReq.length} Request
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>

                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white divide-y divide-gray-200 '>



                  {bidsReq && bidsReq?.map((bid) =>



                    <BidRequestTable
                      key={bid._id}
                      handlerStatusChange={handlerStatusChange}
                      bid={bid}>
                    </BidRequestTable>)
                  }

                  {/* {
                    bidsReq?.map((bid) => <h1 key={bid?._id}>hello world</h1>)
                  } */}

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BidRequests
