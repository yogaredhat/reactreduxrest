import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as catActions from './catActions';
import CatList from './CatList';

class CatsPage extends React.Component {
  render() {
    console.log(this.props.cats);
    return (
      <div >
        <h1>Cats</h1>
        <div >
          <CatList cats={this.props.cats} />
        </div>
      </div>
    );
  }
}


CatsPage.propTypes = {
  cats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);
