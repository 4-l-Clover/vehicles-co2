import {
  currentMonth,
  coverageOptions,
  gradeOptions,
  purposeOfUseOptions,
  yearOptions,
  isInvalidYearMonth,
  getValidMonthPerYear,
  getValidFamilyDriverAge
} from './constants';

export const initialJoinTypeQuote = {
  currentTMNF: false,
  gradeTMNF: gradeOptions[0].value //6S
};

export const initialFirstTypeQuote = {
  hasOtherCar: false,
  gradeOther: 'below10',
  specialConditions: false,
  gradeTMNF: gradeOptions[0].value //6S
};

export const initialState = {
  model: 'alphard',
  firstRegYear: yearOptions[0].value,
  firstRegMonth: currentMonth + '',

  typeQuote: 'join',
  ...initialJoinTypeQuote,
  ...initialFirstTypeQuote,

  purpose: purposeOfUseOptions[0].value,
  birthYear: '1990',
  birthMonth: '1',
  birthDay: '1',
  coverage: coverageOptions[0].value,
  familyDriver: 'under20',
  licenseColor: 'gold',

  planA: '',
  planB: ''
};

export function reducer(state, { type = 'change_one_property', payload, value }) {
  switch (type) {
    case 'change_one_property':
      if (Object.keys(payload)[0] === 'firstRegYear' && isInvalidYearMonth(payload.firstRegYear, state.firstRegMonth)) {
        return { ...state, ...payload, firstRegMonth: getValidMonthPerYear(payload.firstRegYear) };
      }

      // restriction in case "coverage" is 'self',
      if (Object.keys(payload)[0] === 'coverage' && payload.coverage === 'self') {
        return { ...state, ...payload, familyDriver: getValidFamilyDriverAge(state.birthYear) };
      }
      if (Object.keys(payload)[0] === 'birthYear' && state.coverage === 'self') {
        return { ...state, ...payload, familyDriver: getValidFamilyDriverAge(payload.birthYear) };
      }

      return { ...state, ...payload };
    case 'change_type_quote':
      return {
        ...state,
        typeQuote: value,
        ...initialFirstTypeQuote,
        ...initialJoinTypeQuote
      };
    case 'change_is_quoting_second_car':
      return {
        ...state,
        ...initialFirstTypeQuote,
        hasOtherCar: value
      };
    case 'change_second_car_grade':
      return {
        ...state,
        gradeOther: value,
        specialConditions: false,
        gradeTMNF: gradeOptions[0].value // 6S
      };
    case 'change_other_conditions':
      return {
        ...state,
        specialConditions: value,
        gradeTMNF: value ? '7S' : '6S'
      };
    default:
      return state;
  }
}
