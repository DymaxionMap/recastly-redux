import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/currentVideo.js';

var VideoListContainer = (arg) => {
  return VideoList(arg);
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: videos => dispatch(changeVideoList(videos)) });
  
var mapStateToProps = (state) => {
  return { videos: state.videoList };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
