'use strict';

import { SHOW_MODAL, CLOSE_MODAL } from '../actions/modal';

export default function modal(state = null, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
