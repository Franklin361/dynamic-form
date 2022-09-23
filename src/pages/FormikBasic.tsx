import { Layout } from "../components"

export const FormikBasic = () => {



    return (
        <Layout title="Formik Basic">
            <form>

                <input type="text" placeholder="Full name" />


                <input type="email" placeholder="E-mail" />

                <input type="password" placeholder="Password" />


                <div>
                    <label htmlFor="select">Select an option:</label>
                    <select id="select">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="super">Super Admin</option>
                    </select>
                </div>


                <label>
                    <input type="checkbox" name="" id="" />
                    Remember session
                </label>

                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}