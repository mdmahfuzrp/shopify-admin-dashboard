const Card = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal rounded-md mb-3">
            <div className="stat hover:bg-orange-200 text-center lg:text-left hover:shadow-xl cursor-pointer hover:text-white">
                <div className="stat-title text-black">Downloads</div>
                <div className="stat-value text-gray-600">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat hover:bg-red-300 text-center lg:text-left hover:shadow-xl cursor-pointer hover:text-white">
                <div className="stat-title text-black">New Users</div>
                <div className="stat-value text-gray-600">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat hover:bg-green-300 text-center lg:text-left hover:shadow-xl cursor-pointer hover:text-white">
                <div className="stat-title text-black">New Registers</div>
                <div className="stat-value text-gray-600">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    );
};

export default Card;