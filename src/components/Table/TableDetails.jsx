const TableDetails = ({ od }) => {
    const { customerName, email, date, due } = od;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://i.ibb.co/3yPJrP1/video-home.jpg" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-black">{customerName}</div>
                        <div className="text-sm font-medium text-black opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td className="text-red-500">
                <div><div className="badge bg-success text-white border-0">{date}</div></div>
            </td>

            <td className="text-red-500"><span className=" text-error text-lg font-medium border-0">$ {due} <small>-only</small></span></td>
            <th>
                <button className="btn btn-ghost btn-xs bg-blue-400 text-white hover:text-black hover:bg-blue-400">details</button>
            </th>
        </tr>
    );
};

export default TableDetails;