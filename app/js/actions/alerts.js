'use strict';

export const CLOSE_ALERT = 'CLOSE_ALERT';

export function closeAlert() {
  return {
    type: CLOSE_ALERT,
  };
}
