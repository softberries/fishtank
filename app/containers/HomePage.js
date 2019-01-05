// @flow
import { React } from 'react';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/home';

function mapStateToProps(state) {
  console.log("map state to props: " + JSON.stringify(state));
  return {
    count: state.home.count,
    dir: state.home.dir
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
