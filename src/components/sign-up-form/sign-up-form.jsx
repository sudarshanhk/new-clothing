
import { useState } from "react";
import { createAuthUserWitEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/utilities.firebase";
import FormInput from "../form-input/form-input.component";
import "../sign-up-form/sign-up-form.style.scss";
import Button from "../button/button.component";
const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}



const SignUpForm = () => {
    const [formField, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField;
    console.log(defaultFormField);
    const emptyFormField = () => {
        setFormFields(defaultFormField);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Password do not match");
            return
        };
        try {

            const { user } = await createAuthUserWitEmailAndPassword(email, password);

            createUserDocumentFromAuth(user, { displayName })
            emptyFormField()
        } catch (error) {
            console.log(error);
            if (error.code = "auth/email-already-in-use") {
                alert("This user is already in use");
                emptyFormField()
            } else {
                console.log(error)
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
            <h2> Don't Have an account</h2>

            <form onSubmit={handleSubmit}>
                
                <FormInput label={"Display Name"} type="text" onChange={handleChange} required name="displayName" value={displayName} />
              
                <FormInput type="email" label={"Email"} value={email} name="email" required onChange={handleChange} />
                
                <FormInput label={"Password"} type="password" value={password} name="password" required onChange={handleChange} />
               
                <FormInput label={"Confirm Password"} type="password" value={confirmPassword} name="confirmPassword" onChange={handleChange} required />

                <Button type="submit"  > Sign In  </Button>


            </form>
        </div>
    )
}


export default SignUpForm