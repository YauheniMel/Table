export const GET_STATE = 'GET_STATE';
export const TOGGLE_CHECKED_LINE = 'TOGGLE_CHECKED_LINE';
export const TOGGLE_CHECKED_ALL_LINE = 'TOGGLE_CHECKED_ALL_LINE';
export const SET_EVALUATION = 'SET_EVALUATION';

export function getState(response) {
  return {
    type: GET_STATE,
    bodyTable: response.bodyTable,
    isAllChecked: response.isAllChecked,
  };
}

export function toggleCheckedLine(isChecked, id) {
  return {
    id: id,
    type: TOGGLE_CHECKED_LINE,
    isChecked: !isChecked,
  };
}

export function toggleCheckedAllLine(isAllChecked) {
  return {
    type: TOGGLE_CHECKED_ALL_LINE,
    isAllChecked: !isAllChecked,
  };
}

export function setEvaluation(name, value) {
  return {
    type: SET_EVALUATION,
    name: name,
    value: value,
  };
}
