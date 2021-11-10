export const GET_STATE = 'GET_STATE';
export const GET_TARGET_LINE_CONTENT = 'GET_TARGET_LINE_CONTENT';
export const TOGGLE_CHECKED_LINE = 'TOGGLE_CHECKED_LINE';
export const TOGGLE_CHECKED_ALL_LINE = 'TOGGLE_CHECKED_ALL_LINE';
export const CREATE_CONTENT = 'CREATE_CONTENT';
export const ADD_PHOTO = 'ADD_PHOTO';
export const SORT_COLUMN = 'SORT_COLUMN';
export const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER';

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

export function createContent(content, name) {
  return {
    type: CREATE_CONTENT,
    content: content,
    name: name,
  };
}

export function addPhoto(obj) {
  return {
    type: ADD_PHOTO,
    content: obj,
  };
}

export function sortColumn(obj) {
  return {
    type: SORT_COLUMN,
    parameter: obj,
  };
}

export function setSortParameter(isIncrease, name) {
  return {
    type: SET_SORT_PARAMETER,
    direction: isIncrease ? 'increase' : 'decrease',
    name: name,
  };
}
