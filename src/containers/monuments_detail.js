import React, { Component } from 'react';
import { connect } from 'react-redux';

class MonumentDetail extends Component {
  render() {
    const { selectedMonument } = this.props;

    if (!selectedMonument) {
      return (
        <div className="col-md-8">Veuillez sélectionner un monument</div>
      )
    }
    return (
      <div className="col-md-8">
        <h3>{selectedMonument.nameOfStructure}</h3>
        <div className="row">
          <div className="col-md-3">
            <img src={selectedMonument.urlImg} alt={selectedMonument.altImg} />
          </div>
          <div className="col-md-9">
            <div className="row">
              <h5>Pays / ville: {selectedMonument.country} / {selectedMonument.city} </h5>
              <p>Année de construction : {selectedMonument.yearOfConstruct}</p>
              <p>Hauteur : {selectedMonument.pinacleHeight} </p>
              <p>Utilisation : {selectedMonument.typeOfStructure} </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h6>Description</h6>
          <p className="desc">{selectedMonument.Description}</p>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedMonument: state.selectedMonument
  }
}

export default connect(mapStateToProps)(MonumentDetail);
