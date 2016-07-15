import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';
import Footer from './Footer';

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
      const font = {
        fontSize: 14
      }
      const left = {
        textAlign: 'left'
      }
      const lowercase = {
        textTransform: 'lowercase'
      }

      return (
      <section id="contato" className="contact center">
            <div className="switch dark">
                <button className="radio">
                    <span className="elipse"></span>
                </button>
                <h5>Mapa</h5>
            </div>

            <div className="map-overlay padded dark">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-lg-10 col-lg-offset-1">
                         
                          <form onSubmit={this.handleSubmit.bind(this)}
                                name="contactform" id="contactform">
                                <Messages messages={this.props.messages}/>
                                <fieldset>
                                    <div className="float-left">
                                        <div className="form-field name wow fadeInUp animated">
                                          <br/>
                                            <span>
                                                <input type="text" 
                                                    name="name" 
                                                    id="name" 
                                                    placeholder="_nome"
                                                    value={this.state.name} 
                                                    onChange={this.handleChange.bind(this)} 
                                                    autoFocus/>
                                            </span>
                                        </div>
                                        <div className="form-field email wow fadeInUp animated">
                                        <br/>
                                            <span><input type="email"
                                                    className="Input-email" 
                                                    name="email" 
                                                    id="email" 
                                                    placeholder="_e-mail"
                                                    value={this.state.email} 
                                                    onChange={this.handleChange.bind(this)}/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-field message wow fadeInUp animated">
                                        <br/>
                                            <span>
                                              <textarea name="message" 
                                                                className="Input-message"
                                                                id="message" 
                                                                placeholder="_mensagem"
                                                                rows="7" 
                                                                value={this.state.message} 
                                                                onChange={this.handleChange.bind(this)}>
                                            </textarea></span>
                                        </div>
                                    </div>
                                </fieldset>
                               
                                <div className="form-click wow fadeInUp animated">                               
                                    <button type="submit">enviar</button>
                                </div>
                                  <div className="padding"></div>
                                  <div>
                                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 left">
                                        <p className={font}>_</p>
                                        <p className={font}>rua gomes de carvalho 921, 5º andar _são paulo</p>
                                        <p className={font}>+55 11 2337-2341 contato@stqpublicidade.com.br</p>
                                    </div>
                                  </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>


            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
         
            <div id="map" className="clearfix"></div>

        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);
