import 'animate.css';
import { store } from 'react-notifications-component';

const toast = (title, message, type, duration = 5000) => {
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'flipInY'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration,
      onScreen: true,
      pauseOnHover: true
    }
  });
};

export default toast;
