/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Directory</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className='fa fa-instagram'></i></a>{' '}
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com"><i className='fa fa-facebook'></i></a>{' '}
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com"><i className='fa fa-twitter'></i></a>{' '}
            <a className="btn btn-social-icon btn-youtube" href="http://youtube.com"><i className='fa fa-youtube'></i></a>
          </div>
          <div className="col-sm-4 text-center">
            <a href="tel:+12065551234" role="button" className="btn btn-link"><i className="fa fa-phone" />1-206-555-1234</a><br />
            <a href="mailto:notreal@notreal.co" type="button" className="btn btn-link"><i className="fa fa-envelope-o" />campsites@nucamp.co</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;