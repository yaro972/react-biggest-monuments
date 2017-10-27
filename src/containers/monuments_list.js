import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectMonument from '../actions/index';

import { bindActionCreators } from 'redux';

class MonumentsList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {
            this.props.monuments.map(monument => {
              return <li className="list-group-item" key={monument.id} onClick={() => {
                this.props.selectMonument(monument)
              }} >
                {monument.nameOfStructure}
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    monuments: state.monuments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMonument: selectMonument
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MonumentsList);
