import CustomerServiceFormSection from "../components/CustomerServiceFormSection";
import Layout from "../components/Layout/Layout";

const CustomerServiceForm = () => {
    return (
        <Layout>
            <div>
                <div className="col-12">
                    <div className="filter-container  ">
                    </div>
                </div>
                <div>
                    <CustomerServiceFormSection />
                </div>
            </div>
        </Layout>
    )
}
export default CustomerServiceForm;