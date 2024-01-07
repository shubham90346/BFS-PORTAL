import Layout from "../components/Layout/Layout";
import OrderStatusFormSection from "../components/OrderStatusFormSection";

const OrderStatusForm = () => {
    return (
        <Layout>
            <div>
                <div className="col-12">
                    <div className="filter-container  ">
                    </div>
                </div>
                <div>
                    <OrderStatusFormSection />
                </div>
            </div>
        </Layout>
    )
}
export default OrderStatusForm;