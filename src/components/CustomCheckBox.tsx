import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any
}


export const CustomCheckBox = ({ label, ...props }: Props) => {
    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <label className="label_check">
            <input type="checkbox" {...field} {...props} />
            <span>{label}</span>
            <ErrorMessage name={props.name} component="span" className="error" />
        </label>
    )
}
