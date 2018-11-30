import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: q => dispatch(handleVideoSearch(q)) });

var SearchContainer = connect(null, mapDispatchToProps)(Search);

// export default connect(null, mapDispatchToProps)(SearchContainer);
export default SearchContainer;
