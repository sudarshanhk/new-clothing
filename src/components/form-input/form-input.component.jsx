
import { Group, FormInputLabel , Input} from "./form-input.style.jsx"

const FormInput = ({ label, ...otherProps }) => {
    // console.log(label, otherProps);
    return (
        <Group>
            <Input {...otherProps} />
            {<FormInputLabel shrink = {FormInputLabel}  >
                {label}
            </FormInputLabel>}


        </Group>
    )
}

export default FormInput;