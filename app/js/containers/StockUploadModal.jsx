'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { uploadStocks, hideModal, showModal } from '../actions/stock';
import DropZone from 'react-dropzone';

function mapStateToProps(state) {
  return {
    modal: state.transition.modal
  }
}

class StockUploadModal extends React.Component {
  constructor() {
    super();

    this.hideModal = this.hideModal.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  hideModal() {
    console.log("hide modal");
  }

  onDrop(files) {
    console.log(files);
  }

  render() {
    return (
        <div className="ui modal transition visible active" style={divStyle}>
          <i onClick={this.hideModal} className="close icon"></i>
          <div className="header">Upload Stock History</div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <DropZone onDrop={this.onDrop} />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default StockUploadModal;
