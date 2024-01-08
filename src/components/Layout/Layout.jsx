import Header from "../All Headers/header/Header";
import LogoHeader from "../All Headers/logoHeader/LogoHeader";
import MobileHeader from "../All Headers/mobileHeader/MobileHeader";
import TopNav from "../All Headers/topNav/TopNav";
import Footer from "../Footer/Footer";
import HelpSection from "../Footer/HelpSection";

const Layout = ({ children }) => {
    return (
        <div>
        <div className="container p-0 ">
            <div className="row p-0 m-0 d-flex flex-column justify-content-around align-items-center col-12">
                {/* TopNav */}
                <div className="col-12">
                    <TopNav />
                </div>
                <hr className="hrBgColor" />
                <div className="col-12">
            <LogoHeader />
            <Header />
            <MobileHeader/>
            </div>
                <main>{children}</main>
            </div>
        </div>
            <div className="col-12">
                <HelpSection />
            </div>
            <div className="col-12">
                <Footer />
            </div>
            </div>
    )
}
export default Layout;