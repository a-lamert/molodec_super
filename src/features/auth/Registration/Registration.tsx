import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "@/app/hooks"
import { register } from "../authSlice"


// валидация инпутов
const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  name: Yup.string()
    .min(3, "Name is too short - should be 3 chars minimum")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
})

const Login = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2))
          //   setSubmitting(false)
          // }, 400)
          dispatch(
            register({
              email: values.email,
              password: values.password,
              name: values.name,
            }),
          )
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="name" name="name" placeholder="name" />
            <Field type="password" name="password" placeholder="password" />
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
