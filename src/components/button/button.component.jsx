import "./button.style.jsx"
import { BaseButton, GoogleSignButton, Inverted } from "./button.style.jsx"

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted"
}


const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
}[buttonType])


const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton  {...otherProps} >
            {children}
        </CustomButton>
    )
}

export default Button; 