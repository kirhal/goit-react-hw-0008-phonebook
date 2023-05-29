import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authOperations';

import css from 'components/AddContact/AddContacts.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const login = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const currentSubmit = {
      email: emailValue,
      password: passwordValue,
    };
    dispatch(loginUser(currentSubmit));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={login}>
      <input
        type="email"
        name="email"
        className={css['form-input']}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Write email"
      />
      <input
        type="password"
        name="password"
        className={css['form-input']}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Write password"
      />
      <button type="submit" className={css['form-button']}>
        Login
      </button>
    </form>
  );
}
