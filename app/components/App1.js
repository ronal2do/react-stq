import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Address from './Address';

class App extends React.Component {
	 
	  componentDidMount() { //

	  };

	 var classes = classNames( this.props.className, {
        'navigation-is-open': ( this.props.selected === this.props.className )
     } );

	  render() {
	    return (
			<section id="body" className="theme--iron-man front show-logo {{ classes }}" data-path="/">
				<div className="">
				    <h1 className="visually-hidden">
				      stq teste
				    </h1> 
					<div id="header" className="">
						    <div id="cd-nav" className="cd-nav">
						      <div className="cd-navigation-wrapper">
						        <div className="row small-margin-top">
						          <nav className="menu" role="navigation" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
						            <h2 className="h5 text-align-left">
						              The
						              <strong>Menu.</strong></h2>
						            <ul>
						                                                                                                                          <li>
						                      <a itemprop="url" href="/en/who" className="">
						                        <p className="h1" itemprop="name">
													<i ref={(ref) => this.scrollIcon = ref} className="fa fa-2x fa-chevron-down"></i>
					                          Who
						                          <small className="byline">This is who we are.</small>
						                        </p>
						                      </a>
						                    </li>
						                                                                                            <li>
						                      <a itemprop="url" href="/en/what" className="">
						                        <p className="h1" itemprop="name">
						                          What
						                          <small className="byline">This is what we do.</small>
						                        </p>
						                      </a>
						                    </li>
						                                                                                            <li>
						                      <a itemprop="url" href="/en/how" className="">
						                        <p className="h1" itemprop="name">
						                          How
						                          <small className="byline">This is our Approach.</small>
						                        </p>
						                      </a>
						                    </li>
						                                                                                            <li>
						                      <a itemprop="url" href="/en/where" className="">
						                        <p className="h1" itemprop="name">
						                          Where
						                          <small className="byline">This is our playground.</small>
						                        </p>
						                      </a>
						                    </li>
						                                                            </ul>
						          </nav>
						          <div className="contact">
						            <h2 className="h5 text-align-left">
						              Get in
						              <strong>Touch.</strong>
						            </h2>

						            <div className="visually-hidden" vocab="http://schema.org/" typeof="Organization">

						              <span className="visually-hidden" property="name">WONDROUS LLC</span>
						              <span className="visually-hidden" property="telephone">+41 61 271 12 86</span>
						              <span className="visually-hidden" property="email">hello@wondrous.ch</span>
						              <span className="visually-hidden" property="url">https://www.wearewondrous.com</span>
						              
						              <address className="visually-hidden" property="address" typeof="PostalAddress">
						                <span property="streetAddress">Margarethenstrasse 87</span>
						                <span property="postalCode">4053</span>
						                <span property="addressLocality">Basel Switzerland</span>
						              </address>

						            </div>
						            <ul className="contact-data">

						              <li>
						                
						    
										<a href="mailto:hello@wondrous.ch">
										    hello@wondrous.ch
										</a>
						              </li>
						              <li><a href="tel:+41612711286">+41 61 271 12 86</a>
						              </li>
						              <li>
						                <a href="https://goo.gl/maps/ucOJX" target="_blank">
						                  <Address />
						                    
						                </a>
						              </li>
						            </ul>
						            <ul className="langswitcher">
						            <li>
						        <a href="/en" className="active">
						          English
						        </a>
						      </li>
						                
						                          <li>
						        <a href="/de/">
						          Deutsch
						        </a>
						      </li>
						      </ul>
						            <ul className="meta" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
                                        <li>
                                            <a itemprop="url" href="/en/jobs">
							                    <p className="h4 strong" itemprop="name">
							                      Jobs
							                    </p>
						                  </a>
						                </li>
						                <li>
						                    <a itemprop="url" href="/en/open-space">
						                    <p className="h4 strong" itemprop="name">
						                      Open Space
						                    </p>
						                  </a>
						                </li>
						                              <li>
						                                                      <a itemprop="url" href="/en/site-notice">
						                    <p className="h4 strong" itemprop="name">
						                      Site Notice
						                    </p>
						                  </a>
						                </li>
						                          </ul>
						          </div>
						          <div className="slogan">
						            <p className="h5">
						              we are
						              <strong>wondrous.</strong>
						            </p>
						          </div>
						        </div>

						      </div>
						    </div>
						 <Hamburger/>
						 <Logo/>
					</div>
				   	<div>
				        <Header/>
				        {this.props.children}
				        <Footer/>
				    </div>
				</div>
			</section>
	    );
  }
}

export default App;
