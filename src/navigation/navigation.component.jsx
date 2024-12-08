import { Link , Outlet} from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assests/crownlogo.svg";
import { Fragment  , useContext} from "react";
import { UserContext } from "../contexts/user.context";
import { CartContext } from "../contexts/cart.context";
import "../navigation/navigation.style.scss";
import { signOutUser } from "../utils/firebase/utilities.firebase";
import CartIcon from "../components/cart-icon/cart-icon.component";
import CardDropdown from "../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    const { isCartOpen } = useContext(CartContext);
   
    // console.log(currentUser);

    // const signOutHandler = async () => {
    //   await signOutUser();
    //    SetCurrentUser(null) 
    // }
    
    return (
        <Fragment>
        {/* Wrap the logo in the Link component to make it clickable */}
            <div className="navigation">
                <Link className="logo-container" to='/'> <div > <CrownLogo className="logo" /></div> </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    

                    {currentUser ? (<span className='nav-link' to='/auth' onClick={signOutUser}>
                       SIGN OUT
                    </span>) : (<Link className='nav-link' to='/auth'>
                        SIGNIN
                    </Link>)}
                  
                    <CartIcon />
                    

                </div>
                {isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
