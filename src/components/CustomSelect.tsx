import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any
}

export const CustomSelect = ({ label, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>

            <div>
                <label htmlFor={props.name || props.id}>{label}</label>
                <select {...field} {...props} />
            </div>
            <ErrorMessage name={props.name} component="span" className="error" />
        </>
    )
}
