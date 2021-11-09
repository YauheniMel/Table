import {
  GET_STATE,
  TOGGLE_CHECKED_LINE,
  TOGGLE_CHECKED_ALL_LINE,
  SET_EVALUATION,
  GET_TARGET_LINE_CONTENT,
  CREATE_CONTENT,
} from './actions.js';

function controlIsAllLineChecked(arr) {
  // maybe bad practice
  const countNotCheckedLine = arr.filter((item) => !item.isChecked).length;
  return countNotCheckedLine;
}

function getDate() {
  const date = new Date();
  let day, month, year;

  date.getDate() < 10 ? (day = `0${date.getDate()}`) : (day = date.getDate());

  month = date.getMonth() + 1;

  month < 10 ? (month = `0${month}`) : month;

  year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const initState = {
  bodyTable: [],
  targetLine: {},
  isAllChecked: false,
  initContent: {
    date: getDate(),
    band: '',
    country: '',
    city: '',
    comment: '',
    isChecked: false,
    evaluation: null,
    song: 'Blablablablablabla',
    photoURL:
      'https://amtshows.com/wp-content/uploads/2014/01/bands-on-the-rise-silhouette-of-rock-band-on-stage.jpg',
  },
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_STATE:
      return {
        ...state,
        bodyTable: [...action.bodyTable], // location not cloned
        targetLine: { ...action.targetLine },
        isAllChecked: action.isAllChecked,
      };
    case GET_TARGET_LINE_CONTENT:
      return {
        ...state,
        targetLine: { ...action.content },
      };
    case TOGGLE_CHECKED_LINE: {
      const stateCopy = {
        ...state,
        bodyTable: [
          ...state.bodyTable.map((item) => {
            if (item.id === action.id) {
              item.isChecked = action.isChecked;
              return item;
            } else {
              return item;
            }
          }),
        ],
      };
      if (controlIsAllLineChecked(stateCopy.bodyTable)) {
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
        bodyTable: [
          ...state.bodyTable.map((item) => {
            item.isChecked = action.isAllChecked;
            return item;
          }),
        ],
      };

      return stateCopy;
    }
    case SET_EVALUATION: {
      return {
        ...state,
        bodyTable: [
          ...state.bodyTable.map((item) => {
            if (`evaluation${item.id}` === action.name) {
              item.evaluation = action.value;
              return item;
            } else {
              return item;
            }
          }),
        ],
      };
    }
    case CREATE_CONTENT: {
      return {
        ...state,
        initContent: {
          ...state.initContent,
          [action.name]: action.content,
        },
      };
    }
    default:
      return state;
  }
}
