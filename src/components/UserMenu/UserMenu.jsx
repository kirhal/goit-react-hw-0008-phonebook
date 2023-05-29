import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/seleclors';
import { logoutUser } from 'redux/authOperations';

import { User, Button, UserEmail } from './UserMenu.styled';

export default function UserMenu() {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <User>
      <UserEmail>{email}</UserEmail>
      <Button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </User>
  );
}
