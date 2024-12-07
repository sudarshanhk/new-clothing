import { useEffect , useState  } from "react";
import  SignUpForm  from "../../components/sign-up-form/sign-up-form.jsx"

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/utilities.firebase"




const SignIn = () => {

    // const [formField, setFormFields] = useState(defaultFormField);
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(response)
       const userDocRef = await createUserDocumentFromAuth(user)
    }
  
    return (
        <div>
            <h1> I am SignIn Page </h1>
            <button onClick={signInWithGoogle}> Sign In</button>
<SignUpForm />
           
        </div>
    );

}

export default SignIn;