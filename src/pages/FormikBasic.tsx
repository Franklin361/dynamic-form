import * as Yup from 'yup';
import { useFormik } from "formik";
import { Layout } from "../components"

export const FormikBasic = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            rol: '',
            gender: '',
            terms: false
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(3, 'Min. 3 characters').required('Required'),
            email: Yup.string().email('It should be a valid email').required('Required'),
            password: Yup.string().min(6, 'Min. 6 characters').required('Required'),
            terms: Yup.boolean().isTrue('You must accept the terms!'),
            rol: Yup.string().required('Required'),
            gender: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            // TODO: some action
        }
    });

    return (
        <Layout title="Formik Basic">
            <form noValidate onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Full name"
                    {...getFieldProps('fullName')}
                    className={`${(touched.fullName && errors.fullName) && 'error_input'}`}
                />
                {(touched.fullName && errors.fullName) && <span className="error">{errors.fullName}</span>}
                <input
                    type="email"
                    placeholder="E-mail"
                    {...getFieldProps('email')}
                    className={`${(touched.email && errors.email) && 'error_input'}`}
                />
                {(touched.email && errors.email) && <span className="error">{errors.email}</span>}
                <input
                    type="password"
                    placeholder="Password"
                    {...getFieldProps('password')}
                    className={`${(touched.password && errors.password) && 'error_input'}`}
                />
                {(touched.password && errors.password) && <span className="error">{errors.password}</span>}
                <div>
                    <label htmlFor="rol">Select an option:</label>

                    <select id="rol" {...getFieldProps('rol')} >
                        <option value="">--- Select ---</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="super">Super Admin</option>
                    </select>
                </div>


                <div className='radio-group'>
                    <b>Gender: </b>
                    <label >
                        <input type="radio"
                            {...getFieldProps('gender')}
                            checked={getFieldProps('gender').value === 'man'}
                            value='man'
                        />
                        Man
                    </label>
                    <label >
                        <input type="radio"
                            {...getFieldProps('gender')}
                            checked={getFieldProps('gender').value === 'women'}
                            value='women'
                        />
                        Woman
                    </label>
                    <label >
                        <input type="radio"
                            {...getFieldProps('gender')}
                            checked={getFieldProps('gender').value === 'other'}
                            value='other'
                        />
                        Other
                    </label>

                    {(touched.gender && errors.gender) && <span className="error">{errors.gender}</span>}
                </div>
                {(touched.rol && errors.rol) && <span className="error">{errors.rol}</span>}
                <label>
                    <input type="checkbox" {...getFieldProps('terms')} />
                    Terms and Conditions
                    {(touched.terms && errors.terms) && <span className="error">{errors.terms}</span>}
                </label>

                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}