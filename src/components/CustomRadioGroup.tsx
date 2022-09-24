import { useField, ErrorMessage } from 'formik';

type Opt = { id: number, value: string, desc: string }

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
                    <label key={opt.id}>
                        <input
                            {...field}
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

