import { useState, useEffect } from 'react';

const TotalIncome = () => {
    const [count, setCount] = useState(792359203);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="stats stats-vertical ml-0 lg:ml-3 lg:stats-horizontal bg-gradient-to-r from-sky-300 to-blue-500 hover:shadow-xl rounded-md mb-3">
            <div className="stat text-center cursor-pointer text-white">
                <div className="stat-title text-white">Out Total Income in This Website</div>
                <div className="stat-value">
                    <div>
                        <h1 className='text-4xl font-bold' style={{ letterSpacing: '3px' }}><span className='text-white opacity-70'>$</span> {count}</h1>
                    </div>
                </div>
                <div className="stat-desc text-slate-100">↘︎ 90 (14%) Decrement In This Month</div>
            </div>
        </div>
    );
};

export default TotalIncome;