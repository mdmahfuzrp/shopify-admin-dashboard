import ReviewChart from "../components/ReviewChart";

const Products = () => {
    return (
        <div>
            <h1 className="font-semibold bg-white p-5 rounded-lg mb-3">Our Customers Review :</h1>

            <div className="bg-white pt-5 px-5 rounded-lg ml-0">
                <ReviewChart></ReviewChart>
            </div>
        </div>
    );
};

export default Products;