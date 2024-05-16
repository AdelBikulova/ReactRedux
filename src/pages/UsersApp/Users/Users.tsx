import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  usersSliceActions,
  usersSliceSelectors,
} from "store/redux/users/usersSlice"
import Button from "components/Button/Button"
import { UsersPageWrapper, UserCard, Paragraph, ButtonControl } from "./styles"

function Users() {
  const users = useAppSelector(usersSliceSelectors.users)
  const dispatch = useAppDispatch()

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
export default Users;
