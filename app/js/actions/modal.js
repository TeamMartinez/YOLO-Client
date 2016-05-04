'use strict';

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function showModal(modal) {
  return {
    type: SHOW_MODAL,
    modal,
  }
}
