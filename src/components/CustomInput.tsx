import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    type?: 'text' | 'password' | 'email' | string;
    placeholder?: string;
    [x: string]: any
}

export const CustomTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props)

    return (
        <>
            <input {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="error" />
        </>
    )
}
