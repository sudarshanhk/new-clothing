import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assests/crownlogo.svg";
import { Fragment, useContext } from "react";
import { UserContext } from "../contexts/user.context";
import { CartContext } from "../contexts/cart.context";
import { NavigationContainer, LogoContainer  , NavLink, NavLinks} from "./navigation.style.jsx";
import { signOutUser } from "../utils/firebase/utilities.firebase";
import CartIcon from "../components/cart-icon/cart-icon.component";
import CardDropdown from "../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);



    return (
        <Fragment>
            {/* Wrap the logo in the Link component to make it clickable */}
            <NavigationContainer>
                <LogoContainer to='/'> <div > <CrownLogo className="logo" /></div> </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>


                    {currentUser ? (<NavLink as='span' to='/auth' onClick={signOutUser}>
                        SIGN OUT
                    </NavLink>) : (<NavLink  to='/auth'>
                        SIGNIN
                    </NavLink>)}

                    <CartIcon />


                </NavLinks>
                {isCartOpen && <CardDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
