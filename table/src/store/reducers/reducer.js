import { GET_BODY_CONTENT, TOGGLE_CHECKED_LINE, TOGGLE_CHECKED_ALL_LINE, SET_EVALUATION } from './actions.js';

function controlIsAllLineChecked(arr) {
  const countNotCheckedLine = arr.filter(item => !item.isChecked).length;
  return countNotCheckedLine;
}

const initState = {
  bodyTable: [
    {
      id: 1,
      isChecked: false,
      band: 'Nirvana',
      songName: 'School',
      datePost: '25/12/2021',
      evaluation: 4,
      location: { city: 'Seattle', country: 'USA' },
    },
    {
      id: 2,
      isChecked: false,
      band: 'Metallica',
      songName: 'American Idiot',
      datePost: '22/12/2021',
      evaluation: 3,
      location: { city: 'Los Angeles', country: 'USA' },
    },
    {
      id: 3,
      isChecked: false,
      band: 'Green Day',
      songName: 'Mama said',
      datePost: '19/12/2021',
      evaluation: 3,
      location: { city: 'Los Angeles', country: 'USA' },
    },
    {
      id: 4,
      isChecked: false,
      band: 'Metallica',
      songName: 'Mama said',
      datePost: '22/12/2020',
      evaluation: 1,
      location: { city: 'Los Angeles djnnjsn wqjnnwqjn jnsjqwn jqnsjqwn yggy', country: 'USA' },
    },
    {
      id: 5,
      isChecked: true,
      band: 'Metallica jnnwnj jew ewnjw ewjndew enwwwwwwwwmk;',
      songName: 'Mama said',
      datePost: '01/11/2021',
      evaluation: 5,
      location: { city: 'Fjasjnsa', country: 'UK' },
    },
    {
      id: 6,
      isChecked: false,
      band: 'Metallica',
      songName: 'Mama said',
      datePost: '12/11/2021',
      evaluation: null,
      location: { city: 'Fjasjnsa', country: 'UK' },
    },
    {
      id: 7,
      isChecked: true,
      band: 'Metallica',
      songName: 'Mama said jdjbdx njwj jwjqnnjqwn ejewjn ewdj',
      datePost: '01/11/2021',
      evaluation: 5,
      location: { city: 'Fjasjnsa', country: 'UK' },
    },
  ],
  targetLine: {
    id: 3,
    isChecked: true,
    band: 'Metallica',
    songName: 'Mama said jdjbdx njwj jwjqnnjqwn ejewjn ewdj',
    datePost: '01/11/2021',
    evaluation: 5,
    location: { city: 'Fjasjnsa', country: 'UK' },
    photoURL: 'https://st.depositphotos.com/1764136/1679/i/950/depositphotos_16794435-stock-photo-band-isolated.jpg',
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deleniti omnis numquam. Porro, reiciendis. Quis, voluptate id libero molestias maiores repellat odio nisi optio alias iste debitis odit quod ipsum vitae, hic a tempora. Dignissimos numquam aliquam repudiandae deserunt, iste pariatur. Reiciendis nesciunt culpa asperiores aperiam excepturi ratione beatae vitae, ab ipsum eveniet doloremque consectetur reprehenderit maxime iste eum quasi! Eveniet ex facere totam, provident vel cupiditate ad earum perferendis iure placeat sit, atque, possimus maxime dolor sunt! Minus expedita dolores consectetur vel provident quos enim nisi esse illo repellendus dolor, nemo nesciunt placeat iure, dicta fuga. Nulla ipsum eligendi quis nam impedit aliquid excepturi itaque perspiciatis rem quidem unde alias corrupti enim voluptatum earum dolorem soluta nostrum, iure blanditiis. Sapiente quibusdam veritatis, vitae dolore, voluptatibus repellendus velit, iure maxime minima dicta praesentium minus consequatur optio suscipit at! Deserunt accusantium cum, maxime minima dolorum nobis ad velit quidem totam mollitia!',
  },
  isAllChecked: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_BODY_CONTENT:
      return { ...state };
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
