import CustomersGrowth from "../components/CustomersGrowth";

const Customers = () => {
    return (
        <div>
            <h1 className="font-semibold bg-white p-5 rounded-lg mb-3">Our Customers Growth :</h1>

            <div className="bg-white pt-5 px-5 rounded-lg">
                <CustomersGrowth></CustomersGrowth>
            </div>
        </div>
    );
};

export default Customers;