import React from 'react'

const WriteMessage = ({sendMessageHandler, message, setMessage}) => {
    return (
        <div className='write-wrapper'>
        <form className='write' onSubmit={sendMessageHandler}>
          <input
            type='text'
            placeholder='Send a message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className='send'>Send</button>
        </form>
      </div>
    )
}

export default WriteMessage
