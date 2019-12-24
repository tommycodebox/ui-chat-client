import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const Users = ({ users }) => {
  return (
    <div className='Users'>
      <div className='title'>Users online</div>
      {users.map((u, i) => (
        <div key={i} className='user'>
          {u.username}
        </div>
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Users);
