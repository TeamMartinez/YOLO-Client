jest.unmock('../calendar');
jest.unmock('../../actions/calendar');

import calendar from '../calendar';
import { addEvents, addEventSuccess, removeEventSuccess } from '../../actions/calendar';

describe('calendar', () => {
  it('should add events', () => {
    const action = addEvents([
      {
        name: 'Event1',
        location: 'Place1',
        start_time: '2016-03-04T20:00',
        end_time: '2016-03-04T20:00'
      },
      {
        name: 'Event2',
        location: 'Place2',
        start_time: '2016-03-05T20:00',
        end_time: '2016-03-05T20:00'
      }
    ]);
    expect(calendar([], action)).toEqual([
      {
        name: 'Event1',
        location: 'Place1',
        start_time: '2016-03-04T20:00',
        end_time: '2016-03-04T20:00'
      },
      {
        name: 'Event2',
        location: 'Place2',
        start_time: '2016-03-05T20:00',
        end_time: '2016-03-05T20:00'
      }
    ]);
  });
  it('should add an event', () => {
    const action = addEventSuccess({
        name: 'Event1',
        location: 'Place1',
        start_time: '2016-03-04T20:00',
        end_time: '2016-03-04T20:00'
    });
    expect(calendar({}, action)).toEqual([
      {
        name: 'Event1',
        location: 'Place1',
        start_time: '2016-03-04T20:00',
        end_time: '2016-03-04T20:00'
      }
    ]);
  });
  it('should remove an event', () => {
    const action = removeEventSuccess(0);
    expect(calendar([
      {
        name: 'Event1',
        location: 'Place1',
        start_time: '2016-03-04T20:00',
        end_time: '2016-03-04T20:00'
      },
      {
        name: 'Event2',
        location: 'Place2',
        start_time: '2016-03-05T20:00',
        end_time: '2016-03-05T20:00'
      }
    ], action)).toEqual([
      {
        name: 'Event2',
        location: 'Place2',
        start_time: '2016-03-05T20:00',
        end_time: '2016-03-05T20:00'
      }
    ]);
  });
});
