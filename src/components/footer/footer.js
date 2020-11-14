import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div>© {new Date().getFullYear()} Ricky Noviansyah</div>
          <div className="footer__social">
   
            <a
              style={{ marginLeft: 24 }}
              className="footer__social__link"
              href="https://twitter.com/RickyBrainware"
            >
              <FaTwitter size={24} />
            </a>
            <a
              style={{ marginLeft: 24 }}
              className="footer__social__link"
              href="https://www.instagram.com/ricky_brainware/"
            >
              <FaInstagram size={24} />
            </a>
            <a
              style={{ marginLeft: 24 }}
              className="footer__social__link"
              href="https://web.facebook.com/ricky.noviansyahoffc.3"
            >
              <FaFacebook size={24} />
            </a>
            <a
              style={{ marginLeft: 24 }}
              className="footer__social__link"
              href="https://www.linkedin.com/in/rickynoviansyah/"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
