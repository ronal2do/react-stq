import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Hero from './Hero';
import Contact from './Contact';

class Home extends React.Component {
  render() {
    return (
        <div>       
          <Hero />
          <section id="dengue" className="poster center padded dark Sessao">
              <div className="container">
                              
                   <div className="row">
                      <div className="col-xs-12 wow fadeInUp Sessao-filho" data-wow-delay="0.5s" >    
                      </div>
                  </div>
                  <div className="royalSlider rsDefault wow fadeInUp rsAutoHeight rsHor rsFade rsWithBullets Sessao-filho-royal">
                    <div className="rsOverflow" >
                      <div className="rsContainer">
                          <div className="rsSlide  rsActiveSlide">
                              <div className="rsABlock" >
                                      <h2 className="col-xs-12 Destaque" data-wow-delay="0.5s">_arte contra a dengue</h2>
                                      <p className="col-xs-12 text-center branco Destaque" data-wow-delay="0.8s">Artistas urbanos na luta contra a dengue.</p>
                              </div>
                          </div>
                      </div>
                    </div>
                      <div></div>
                  </div>
                  
                  <div className="row">
                      <div className="col-xs-12 wow fadeInUp" data-wow-delay="0.5s" >
                          <p className="sub-heading">
                              <a href="/arte-contra-dengue"></a>
                          </p>
                      </div>
                      
                  </div>
                  
              </div>
          </section>
          <section id="travessia" className="poster center padded dark Sessao">
              <div className="container">
                              
                   <div className="row">
                      <div className="col-xs-12 wow fadeInUp Sessao-filho" data-wow-delay="0.5s" >    
                      </div>
                  </div>
                  <div className="royalSlider rsDefault wow fadeInUp rsAutoHeight rsHor rsFade rsWithBullets Sessao-filho-royal">
                    <div className="rsOverflow" >
                      <div className="rsContainer">
                          <div className="rsSlide  rsActiveSlide">
                              <div className="rsABlock" >
                                      <h2 className="col-xs-12 Destaque" data-wow-delay="0.5s">_travessia segura</h2>
                                      <p className="col-xs-12 text-center branco Destaque" data-wow-delay="0.8s">Artistas urbanos na luta contra a dengue.</p>
                              </div>
                          </div>
                      </div>
                    </div>
                      <div></div>
                  </div>
                  
                  <div className="row">
                      <div className="col-xs-12 wow fadeInUp" data-wow-delay="0.5s" >
                          <p className="sub-heading">
                              <a href="/arte-contra-dengue"></a>
                          </p>
                      </div>
                      
                  </div>
                  
              </div>
          </section>
          <Contact />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
