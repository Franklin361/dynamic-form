import { Form, Formik } from "formik"
import { CustomCheckBox, CustomRadioGroup, CustomTextInput, CustomSelect, Layout } from "../components"
import { getInputs } from "../utils"

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
                                inputs.map(({ name, type, value, ...props }) => {
                                    switch (type) {
                                        case "select":
                                            return <CustomSelect
                                                key={name}
                                                label={props.label!}
                                                name={name}
                                                options={props.options!}
                                            />

                                        case "radio-group":
                                            return <CustomRadioGroup
                                                label={props.label!}
                                                name={name}
                                                options={props.options!}
                                                key={name} />

                                        case "checkbox":
                                            return <CustomCheckBox
                                                label={props.label!}
                                                key={name}
                                                name={name}
                                            />

                                        default:
                                            return <CustomTextInput
                                                key={name}
                                                name={name}
                                                placeholder={props.placeholder}
                                                type={type}
                                            />
                                    }
                                })
                            }

                            <button className="btn btn_submit" type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </Layout>
    )
}