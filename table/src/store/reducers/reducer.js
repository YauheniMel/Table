import { GET_STATE, TOGGLE_CHECKED_LINE, TOGGLE_CHECKED_ALL_LINE, SET_EVALUATION } from './actions.js';

function controlIsAllLineChecked(arr) { // maybe bad practice
  const countNotCheckedLine = arr.filter(item => !item.isChecked).length;
  return countNotCheckedLine;
}

const initState = {
  bodyTable: [],
  targetLine: {},
  isAllChecked: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_STATE:
      return {
        ...state,
        bodyTable: [...action.bodyTable], // location not cloned
        targetLine: {...action.targetLine},
        isAllChecked: action.isAllChecked
      };
    case TOGGLE_CHECKED_LINE: {
      const stateCopy = {
        ...state,
        bodyTable: [...state.bodyTable.map((item) => {
          if(item.id === action.id) {
            item.isChecked = action.isChecked;
            return item;
          } else {
            return item;
          }
        })]
      }

      if(controlIsAllLineChecked(stateCopy.bodyTable)) {
        stateCopy.isAllChecked = false;
      } else {
        stateCopy.isAllChecked = true;
      }

      return stateCopy;
    }
    case TOGGLE_CHECKED_ALL_LINE: {
      const stateCopy = {
        ...state,
        isAllChecked: action.isAllChecked,
        bodyTable: [...state.bodyTable.map(item => {
          item.isChecked = action.isAllChecked;
          return item;
        })],
      }

      return stateCopy;
    }
    case SET_EVALUATION: {
      return {
        ...state,
        bodyTable: [...state.bodyTable.map((item) => {
          if(`evaluation${item.id}` === action.name) {
            item.evaluation = action.value;
            return item;
          } else {
            return item;
          }
        })]
      }
    }
    default:
      return state;
  }
}
