import { Link, Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Company Contact List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Company 1 */}
                <div className="bg-white rounded p-4 shadow">
                    <h2 className="text-lg font-semibold">Company 1</h2>
                    <p className="text-gray-500">Phone: (123) 456-7890</p>
                    <p className="text-gray-500">Fax: (123) 456-7891</p>
                    <p className="text-gray-500">Email: company1@example.com</p>
                    <button className="text-xl p-3 bg-blue-400 rounded-lg"><Link to={`/contact/details`}>Details</Link></button>
                </div>
                
                {/* Company 2 */}
                <div className="bg-white rounded p-4 shadow">
                    <h2 className="text-lg font-semibold">Company 2</h2>
                    <p className="text-gray-500">Phone: (234) 567-8901</p>
                    <p className="text-gray-500">Fax: (234) 567-8902</p>
                    <p className="text-gray-500">Email: company2@example.com</p>
                </div>
                
                {/* Continue for other companies */}
                
                {/* Company 10 */}
                <div className="bg-white rounded p-4 shadow">
                    <h2 className="text-lg font-semibold">Company 10</h2>
                    <p className="text-gray-500">Phone: (345) 678-9012</p>
                    <p className="text-gray-500">Fax: (345) 678-9013</p>
                    <p className="text-gray-500">Email: company10@example.com</p>
                </div>
            </div>
        <Outlet></Outlet>
        </div>

        </>
    );
};

export default Contact;