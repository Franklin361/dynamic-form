import { useField, ErrorMessage } from 'formik';

type Opt = { value: string | number, desc: string }

interface Props {
    options: Opt[]
    name: string
    label: string
    [x: string]: any
}

export const CustomRadioGroup = ({ label, options, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <div className='radio-group'>
            <b>{label}</b>
            {
                options.map(opt => (
                    <label key={opt.value}>
                        <input
                            {...field}
                            {...props}
                            type="radio"
                            checked={opt.value === field.value}
                            value={opt.value}
                        />
                        {opt.desc}
                    </label>
                ))
            }
            <ErrorMessage name={props.name} component="span" className="error" />
        </div>
    )
}

