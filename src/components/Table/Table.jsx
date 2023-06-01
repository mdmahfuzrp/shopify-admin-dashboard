import { useEffect, useState } from "react";
import TableDetails from "./TableDetails";

const Table = () => {

    const [orderDetails, setOrderDetails] = useState([]);
    const [filterDate, setFilterDate] = useState('');
    const [sortDirection, setSortDirection] = useState('');

    useEffect(() => {
        fetch('TableData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(sortDirection);
                let filteredData = data;
                if (filterDate) {
                    filteredData = filteredData.filter(od => od.date === filterDate);
                }
                if (sortDirection) {
                    console.log(sortDirection);
                    if (sortDirection === 'lowToHigh') {
                        filteredData = filteredData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
                        console.log(filteredData, "low to high");
                    } else if (sortDirection === 'highToLow') {
                        filteredData = filteredData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
                        console.log(filteredData, "high to low");
                    }
                }

                setOrderDetails(filteredData);
            })
    }, [filterDate, sortDirection])


    // Filter by Date (as requirement)
    const datePicker = event => {
        setFilterDate(event.target.value);
    }

    // Filter by Price
    const handleSortDirectionChange = (event) => {
        setSortDirection(event.target.value);
    };

    return (

        <div className="overflow-x-auto bg-white p-5 rounded-xl">
            <div className="flex flex-col lg:flex-row w-full items-center justify-between">
                {/* Filter by Date */}
                <input type="date" className="bg-success border-0 outline-none text-white py-1 px-2 rounded-md" onChange={datePicker} name="" id="" />

                {/* Filter by Price */}
                <div>
                    <select onChange={handleSortDirectionChange} className="text-sm border-0 outline-none bg-error py-1 px-2 rounded-md text-white select-bordered">
                        <option disabled selected>Price Range</option>
                        <option><button>lowToHigh</button></option>
                        <option><button>highToLow</button></option>
                    </select>
                </div>
            </div>
            {
                orderDetails.length > 0 ? <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-blue-400 text-[15px] font-medium">Customer Name</th>
                            <th className="text-blue-400 text-[15px] font-medium">Purchase Date</th>
                            <th className="text-blue-400 text-[15px] font-medium">Payment Status</th>
                            <th className="text-blue-400 text-[15px] font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderDetails.map(od => <TableDetails
                                key={od._id}
                                od={od}
                            ></TableDetails>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th className="text-blue-400 text-[15px] font-medium">Customer Name</th>
                            <th className="text-blue-400 text-[15px] font-medium">Purchase Date</th>
                            <th className="text-blue-400 text-[15px] font-medium">Payment Status</th>
                            <th className="text-blue-400 text-[15px] font-medium"></th>
                        </tr>
                    </tfoot>

                </table> : <div className="p-5 text-center">
                    <p>No data found</p>
                </div>
            }
        </div>
    );
};

export default Table;