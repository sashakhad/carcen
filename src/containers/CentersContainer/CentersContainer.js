import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Centers from '../../components/Centers/Centers';

@connect(mapStateToProps)
class CentersContainer extends Component {
  render() {
    const { matches } = this.props.patient;
    return (
      <div>
        <Centers data={matches} />
      </div>
    )
  }
}

CentersContainer.propTypes = {
  matches: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    patient: {...state.patients},
  };
}

export default CentersContainer;

