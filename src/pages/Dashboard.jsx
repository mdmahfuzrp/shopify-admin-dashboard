import Card from "../components/Card";
import CustomersGrowth from "../components/CustomersGrowth";
import ReviewChart from "../components/ReviewChart";
import Table from "../components/Table/Table";
import TotalIncome from "../components/TotalIncome";

const Dashboard = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Card></Card>
            <TotalIncome></TotalIncome>
            <div className="col-span-full mb-3">
                <Table></Table>
            </div>
            <div className="bg-white pt-5 px-5 rounded-lg">
                <CustomersGrowth></CustomersGrowth>
            </div>
            <div className="bg-white pt-5 px-5 rounded-lg ml-0 lg:ml-3">
                <ReviewChart></ReviewChart>
            </div>
        </div>
    );
};

export default Dashboard;