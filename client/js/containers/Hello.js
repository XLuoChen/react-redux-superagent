import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Value from "../components/Hello";

Value.propTypes = {
  value: PropTypes.string.isRequired,
  onGet: PropTypes.func.isRequired
};

const mapStateToProps = (state)=> {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGet: ()=> {
      dispatch({type: "GETTVALUE"});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Value);
