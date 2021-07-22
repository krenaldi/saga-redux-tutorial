import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users-actions';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

// Destructure props to be able to call action in useEffect hook to prevent constant calls to api
const App = ({users}) => {
  // console.log('props', users);

  useEffect(() => {
    getUsersRequest();
  }, []);

  const handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
  }

  return (
    <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} />
    </div>
  );
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
