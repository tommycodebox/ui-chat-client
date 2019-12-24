import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { joinChat } from '../../actions/user';

// Utils
import toast from '../../utils/toast';

const ConnectForm = ({ joinChat, history, socket }) => {
  const [uname, setUname] = useState('');
  const joinChatHandler = e => {
    e.preventDefault();
    if (socket) {
      if (uname.length > 0) {
        if (socket.connected) {
          joinChat(socket, uname, history);
        } else {
          toast(
            'Uh uh!',
            'Looks like server is unavailable ATM, please try again later.',
            'danger'
          );
        }
      }
    }
  };
  return (
    <form className='connect-box' onSubmit={joinChatHandler}>
      <h3 className='title'>To start chatting, enter your username</h3>

      <div className={`input-group ${uname.length > 0 ? 'active' : ''}`}>
        <input
          type='text'
          value={uname}
          onChange={e => setUname(e.target.value)}
        />
        <label>Username</label>
      </div>
      <button className='connect'>Connect</button>
    </form>
  );
};

ConnectForm.propTypes = {
  joinChat: PropTypes.func.isRequired,
  socket: PropTypes.object
};

const mapStateToProps = state => ({
  socket: state.socket
});

export default connect(mapStateToProps, { joinChat })(ConnectForm);
