
import { useState  } from "react";
import {  createUserDocumentFromAuth, signInWithGooglePopup, signIneAuthUserWitEmailAndPassword } from "../../utils/firebase/utilities.firebase";
import FormInput from "../form-input/form-input.component";
import "../sign-in-form/sign-in-form.style.scss";
import Button from "../button/button.component";

const defaultFormField = {
    email: "",
    password: "",
   
}

const SignIn = () => {
    const [formField, setFormFields] = useState(defaultFormField);
    const {  email, password } = formField;
    const emptyFormField = () => {
        setFormFields(defaultFormField);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        // const userDocRef = createUserDocumentFromAuth(user)
  
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
     
        try {
            const {user} = await signIneAuthUserWitEmailAndPassword(email, password);
            emptyFormField()
        } catch (error) {
            console.log(error);
            if (error.code == "auth/invalid-credential"); {
                alert("enter valid credentials");
                emptyFormField()  
            }
           
        }
    }
    const handleChange = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        setFormFields({ ...formField, [name]: value })

    }
    return (
        <div className="sign-up-container">
            <h2> Already Have an account</h2>

            <form onSubmit={handleSubmit}>
              
                <FormInput type="email" label={"Email"} value={email} name="email" required onChange={handleChange} />
                
                <FormInput label={"Password"} type="password" value={password} name="password" required onChange={handleChange} />
               
          

                <div className="buttons-container">
                    <Button type="submit" > Sign In  </Button>

                    <Button type="button" buttonType='google' onClick={signInWithGoogle} > Sign In  with google </Button>

               </div>

            </form>
        </div>
    )
}


export default SignIn