export const GET_STATE = 'GET_STATE';
export const GET_TARGET_LINE_CONTENT = 'GET_TARGET_LINE_CONTENT';
export const TOGGLE_CHECKED_LINE = 'TOGGLE_CHECKED_LINE';
export const TOGGLE_CHECKED_ALL_LINE = 'TOGGLE_CHECKED_ALL_LINE';
export const SET_EVALUATION = 'SET_EVALUATION';
export const CREATE_CONTENT = 'CREATE_CONTENT';

export function getState(response) {
  return {
    type: GET_STATE,
    bodyTable: response.bodyTable,
  };
}

export function getTargetLineContent(content) {
  return {
    type: GET_TARGET_LINE_CONTENT,
    content: content,
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

export function createContent(content, name) {
  return {
    type: CREATE_CONTENT,
    content: content,
    name: name
  }
}
