import { Link , Outlet} from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assests/crownlogo.svg";
import { Fragment } from "react";
import "../navigation/navigation.style.scss"


const Navigation = () => {
    return (
        <Fragment>
            {/* Wrap the logo in the Link component to make it clickable */}
            <div className="navigation">
                <Link className="logo-container" to='/'> <div > <CrownLogo className="logo" /></div> </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                   
                    <Link className='nav-link' to='/auth'>
                    SIGNIN
                    </Link>
                    


                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
