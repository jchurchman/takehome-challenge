import { BRANDING, DAYS } from './constants';

export const initialState = {
  [BRANDING.FULL_NAME]: 'Bright.md Hospital',
  [BRANDING.SHORT_NAME]: 'BMD',
  [BRANDING.WELCOME_TEXT]: 'Get a quick diagnosis for many medication conditions from your computer or mobile device.',
  [DAYS.SUNDAY]: {
    open: false,
    start: 10,
    end: 18,
  },
  [DAYS.MONDAY]: {
    open: true,
    start: 10,
    end: 18,
  },
  [DAYS.TUESDAY]: {
    open: true,
    start: 10,
    end: 18,
  },
  [DAYS.WEDNESDAY]: {
    open: true,
    start: 10,
    end: 18,
  },
  [DAYS.THURSDAY]: {
    open: true,
    start: 10,
    end: 18,
  },
  [DAYS.FRIDAY]: {
    open: true,
    start: 10,
    end: 18,
  },
  [DAYS.SATURDAY]: {
    open: false,
    start: 10,
    end: 18,
  },
}
