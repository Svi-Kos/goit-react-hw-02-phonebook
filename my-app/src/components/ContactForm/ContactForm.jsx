import React, { Component } from 'react';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('from contact form', this.state);

    this.props.onSubmit(this.state.name);
    // this.props.onSubmit(this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.contactForm}>
        <label className={s.contactFormLabel}>
          Name
          <input
            type="text"
            required
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.contactFormLabel}>
          Number
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.contactFormBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
