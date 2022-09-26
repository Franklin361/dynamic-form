import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any
}


export const CustomCheckBox = (props: Props) => {
    const [field] = useField(props)

    return (
        <label className="label_check">
            <input type="checkbox" {...field} {...props} />
            <span>{props.label}</span>
            <ErrorMessage name={props.name} component="span" className="error" />
        </label>
    )
}
