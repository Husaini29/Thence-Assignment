import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const isRegistrationPage = location.pathname === "/registration";
    
  return (
        <div>
            <header className="frame-group">
                <img
                className="logo"
                loading="lazy"
                alt=""
                src="/frame-1261155216.svg"
                />
                
                {isHomePage && (
                    <div className="project-btn">
                        <button className="secondary-btn" onClick={()=> navigate("/registration")}>Get projects</button>
                        <button className="primary-btn">Onboard Talent</button>
                    </div>
                )}

                {isRegistrationPage && (
                    <div className="project-btn">
                        <button className="cancel-btn" onClick={()=> navigate("/")}><RxCross1 /></button>
                    </div>
                )}

            </header>
        </div>
  );
};

export default Header;
