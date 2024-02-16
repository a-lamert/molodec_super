import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "@/app/hooks"
import { login } from "../authSlice"

// валидация инпутов
const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
})

const Login = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2))
          //   setSubmitting(false)
          // }, 400)
          dispatch(login({ email: values.email, password: values.password }))
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
