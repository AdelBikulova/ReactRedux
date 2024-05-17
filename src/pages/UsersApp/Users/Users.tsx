import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  usersSliceActions,
  usersSliceSelectors,
} from "store/redux/users/usersSlice"
import Button from "components/Button/Button"
import { UserData } from "store/redux/users/types"
import { UsersPageWrapper, UserCard, Paragraph, ButtonControl } from "./styles"

function Users() {
  const users = useAppSelector(usersSliceSelectors.users)
  const dispatch = useAppDispatch()

  //   первый вариант
  const handleDeleteUser = (id: string) => {
    dispatch(usersSliceActions.deleteUser(id))
  }

  const handleDeleteAllUsers = () => {
    dispatch(usersSliceActions.deleteAllUsers())
  }

  return (
    <UsersPageWrapper>
      {users.map(user => (
        <UserCard key={user.id}>
          <Paragraph>{user.firstlastName}</Paragraph>
          <Paragraph>{user.age}</Paragraph>
          <Paragraph>{user.jobTitle}</Paragraph>
          <ButtonControl>
            <Button
              name="Delete user"
              onButtonClick={() => handleDeleteUser(user.id)}
            />
          </ButtonControl>
        </UserCard>
      ))}
      {users.length > 0 && (
        <ButtonControl>
          <Button
            name="Delete all users"
            onButtonClick={handleDeleteAllUsers}
          />
        </ButtonControl>
      )}
    </UsersPageWrapper>
  )
}

// второй вариант teacher

// const usersCards = users.map((user: UserData) => {
//   const deleteUser = () => {
//     dispatch(usersSliceActions.deleteUser(user.id))
//   }

//   return (
//     <UserCard key={user.id}>
//       <Paragraph>Full name: {user.firstlastName}</Paragraph>
//       <Paragraph>Age: {user.age}</Paragraph>
//       <Paragraph>Job Title: {user.jobTitle}</Paragraph>
//       <Button name='Delete' onButtonClick={deleteUser} />
//     </UserCard>
//   )
// })

// const deleteAllUsers = () => {
//   dispatch(usersSliceActions.deleteAllUsers())
// }

// return (
//   <UsersPageWrapper>
//     {usersCards}
//     {users.length > 0 && <Button name='Delete all users' onButtonClick={deleteAllUsers} />}
//   </UsersPageWrapper>
// )
// }

export default Users
