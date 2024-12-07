import { useEffect , useState  } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.jsx";
import SignIn from "../../components/sign-in-form/sign-in-form.jsx";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/utilities.firebase.jsx";
import "../authentication/authentication.style.scss"




const Authentication = () => {

    return (
        <div className="authentication-container">
          
           
            <SignIn />  
           <SignUpForm />
           
        </div>
    );

}

export default Authentication;