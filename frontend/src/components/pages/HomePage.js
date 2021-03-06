import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
    { isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link> }

  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: !!state.user.token
  }
}


export default connect(mapStateToProps, { logout })(HomePage);
