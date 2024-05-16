import { useFormik } from "formik"
import Input from "components/Input/Input"
import Button from "components/Button/Button"

import {
  HomePageWrapper,
  UserForm,
  UserFormName,
  ButtonControl,
} from "./styles"
import { useAppDispatch } from "store/hooks"
import { usersSliceActions } from "store/redux/users/usersSlice"
import { v4 } from "uuid"

function Home() {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      firstlastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: values => {
      if (values.firstlastName && values.age && values.jobTitle) {
        dispatch(usersSliceActions.addUser({ ...values, id: v4() }))
        formik.resetForm()
      } else {
        alert("Please fill in all the fields!")
      }
    },
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="firstlastName"
          placeholder="Enter fullname"
          value={formik.values.firstlastName}
          label="First/Last name"
          onInputChange={formik.handleChange}
        />
        <Input
          name="age"
          placeholder="Enter age"
          value={formik.values.age}
          label="Age"
          onInputChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          placeholder="Enter job"
          value={formik.values.jobTitle}
          label="Job title"
          onInputChange={formik.handleChange}
        />
        <ButtonControl>
          <Button name="Create" type="submit" />
        </ButtonControl>
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home;
