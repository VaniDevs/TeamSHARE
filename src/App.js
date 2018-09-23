import React, { Component } from 'react';
import MainRoutes from './components/Routes/MainRoutes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserInfo, fetchUser } from './actions/authActions';

import { withRouter } from 'react-router';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let path = this.props.location && this.props.location.pathname ? this.props.location.pathname : null;
    // console.log('path', path);
    this.props.fetchUser().then(ret => {
      if(ret && ret.payload && ret.payload.uid) {
        // console.log('uid', ret);
        this.props.fetchUserInfo(ret.payload.uid);

      }
    })
  }
  render() {
    let { userInfo, currentUser } = this.props;
    return (
      <div className="app">
        <MainRoutes 
          type={userInfo && userInfo.type ? userInfo.type : null} 
          currentUser={currentUser}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchUserInfo,
    fetchUser
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userInfo: state.userInfo
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));