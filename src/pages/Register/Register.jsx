import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authOperations';

import css from 'components/AddContact/AddContacts.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const addUser = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const currentSubmit = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };
    dispatch(registerUser(currentSubmit));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={addUser}>
      <input
        type="text"
        name="name"
        className={css['form-input']}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Write name"
      />
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
        Register
      </button>
    </form>
  );
}
