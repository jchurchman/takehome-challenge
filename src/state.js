import * as CONSTANTS from './constants';

export const initialState = {
  [CONSTANTS.FULL_NAME]: 'Bright.md Hospital',
  [CONSTANTS.SHORT_NAME]: 'BMD',
  [CONSTANTS.WELCOME_TEXT]: 'Get a quick diagnosis for many medication conditions from your computer or mobile device.',
  [CONSTANTS.SUNDAY]: {
    open: false,
    start: '9:00 AM',
    end: '5:00 PM',
  },
  [CONSTANTS.MONDAY]: {
    open: true,
    start: '9:00 AM',
    end: '5:00 PM',
  },
  [CONSTANTS.TUESDAY]: {
    open: true,
    start: '9:00 AM',
    end: '5:00 PM',
  },
  [CONSTANTS.WEDNESDAY]: {
    open: true,
    start: '9:00 AM',
    end: '5:00 PM',
  },
  [CONSTANTS.THURSDAY]: {
    open: true,
    start: '9:00 AM',
    end: '5:00 PM',
  },
  [CONSTANTS.FRIDAY]: {
    open: true,
    start: '9:00 AM',
    end: '5:00 PM',
  },
  [CONSTANTS.SATURDAY]: {
    open: false,
    start: '9:00 AM',
    end: '5:00 PM',
  },
}
