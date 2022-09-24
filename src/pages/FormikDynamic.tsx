import { Form, Formik } from "formik"
import { CustomCheckBox, CustomRadioGroup, CustomTextInput, Layout } from "../components"
import { getInputs } from "../utils"
import { CustomSelect } from '../components/CustomSelect';

const { initialValues, inputs, validationSchema } = getInputs('login')

export const FormikDynamic = () => {
    return (
        <Layout title="Formik Dynamic">

            <Formik
                {...{ initialValues, validationSchema }}
                onSubmit={(values) => { console.log(values) }}
            >
                {
                    () => (
                        <Form noValidate>
                            {
                                inputs.map(({ ...props }) => {
                                    switch (props.type) {
                                        case "select":
                                            return <CustomSelect key={props.name} label={props.label!} name={props.name} className="select_input">
                                                <option value="">--- Selecciona una opción ---</option>
                                                {
                                                    props.options?.map(({ id, desc }) => (<option value={id} key={id}>{desc}</option>))
                                                }
                                            </CustomSelect>

                                        case "radio-group":
                                            return <CustomRadioGroup label={props.label!} name={props.name} options={props.options as any} key={props.name} />

                                        case "checkbox":
                                            return <CustomCheckBox
                                                label={props.label!}
                                                key={props.name}
                                                name={props.name}
                                            />

                                        default:
                                            return <CustomTextInput
                                                key={props.name}
                                                name={props.name}
                                                placeholder={props.placeholder}
                                                type={props.type as any}
                                            />
                                    }
                                })
                            }

                            <button className="btn btn_submit" type="submit">Ingresar</button>
                        </Form>
                    )
                }
            </Formik>
        </Layout>
    )
}