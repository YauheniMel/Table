export const GET_BODY_CONTENT = 'GET_BODY_CONTENT';
export const TOGGLE_CHECKED_LINE = 'TOGGLE_CHECKED_LINE';
export const TOGGLE_CHECKED_ALL_LINE = 'TOGGLE_CHECKED_ALL_LINE';

export function getBodyContent() {
  return {
    type: GET_BODY_CONTENT,
  };
}

export function toggleCheckedLine(isChecked, id) {
  return {
    id: id,
    type: TOGGLE_CHECKED_LINE,
    isChecked: !isChecked
  }
}

export function toggleCheckedAllLine(isAllChecked) {
  return {
    type: TOGGLE_CHECKED_ALL_LINE,
    isAllChecked: !isAllChecked
  }
}
