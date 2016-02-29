'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { uploadStocks, hideModal } from '../actions/transaction';
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
    this.props.dispatch(hideModal());
  }

  onDrop(files) {
    this.props.dispatch(uploadStocks(files));
  }

  render() {
    return (
        <div className="ui modal transition visible active">
          <i onClick={this.hideModal} className="close icon"></i>
          <div className="header">Upload Stock History</div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <DropZone onDrop={this.onDrop}>
                  <div style={{textAlign: "center"}}>Drop Files Here</div>
                </DropZone>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default StockUploadModal;
