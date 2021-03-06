import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledMenu } from './menu.styled';

const Menu = ({ open, dark, setOpen }) => {
  return (
    <StyledMenu open={open} dark={dark}>
      <Link to="/" onClick={() => setOpen(!open)}>
        📰 Articles
      </Link>
      <Link to="/about" onClick={() => setOpen(!open)}>
        💻 About
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        📬 Contact
      </Link>
     
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Menu;
