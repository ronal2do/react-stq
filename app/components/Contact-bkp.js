import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
  }

  render() {
    return (
      <div className="Form-contact container">
        <h3>_fale conosco</h3>
        <Messages messages={this.props.messages}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">_nome</label>
          <input type="text" 
                  className="Input-nome"
                  name="name" 
                  id="name" 
                  placeholder="seu nome aqui"
                  value={this.state.name} 
                  onChange={this.handleChange.bind(this)} 
                  autoFocus/>
          <label htmlFor="email">_email</label>
          <input type="email"
                  className="Input-email" 
                  name="email" 
                  id="email" 
                  value={this.state.email} 
                  onChange={this.handleChange.bind(this)}/>
          <label htmlFor="message">_mensagem</label>
          <textarea name="message" 
                  className="Input-message"
                  id="message" 
                  rows="7" 
                  value={this.state.message} 
                  onChange={this.handleChange.bind(this)}>
          </textarea>
          <br/>
          <button type="submit">_enviar</button>
        </form>
      </div>






      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);
