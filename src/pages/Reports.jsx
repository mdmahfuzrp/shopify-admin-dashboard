import Card from "../components/Card";
import TotalIncome from "../components/TotalIncome";

const Reports = () => {
    return (
        <div>
            <h1 className="font-semibold bg-white p-5 rounded-lg mb-3">Our Company Reports :</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Card></Card>
                <TotalIncome></TotalIncome>
            </div>
        </div>
    );
};

export default Reports;