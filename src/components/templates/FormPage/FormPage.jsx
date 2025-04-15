import { useReducer } from 'react';
import { InputFile } from '../../atoms/InputFile/InputFile';
import { InputText } from '../../atoms/InputText/InputText';
import { TextArea } from '../../atoms/TextArea/TextArea';
import styles from './FormPage.module.scss';
import { useDispatch } from 'react-redux';
import { addSongThunk } from '../../../store/actions';

const FORM_ACTION_TYPES = {
  CREATE_SONG: 'CREATE_SONG',
  CREATE_BAND: 'CREATE_BAND',
  CREATE_DETAILS: 'CREATE_DETAILS',
  ADD_PHOTO: 'ADD_PHOTO',
  CREATE_COUNTRY: 'CREATE_COUNTRY',
  CREATE_CITY: 'CREATE_CITY',
  RESET: 'RESET',
};

const initFormState = {
  song: '',
  band: '',
  details: '',
  photo: '',
  country: '',
  city: '',
};

const reducer = (state, action) => {
  if (action.type === FORM_ACTION_TYPES.CREATE_SONG) {
    return {
      ...state,
      song: action.payload,
    };
  } else if (action.type === FORM_ACTION_TYPES.CREATE_BAND) {
    return {
      ...state,
      band: action.payload,
    };
  } else if (action.type === FORM_ACTION_TYPES.CREATE_DETAILS) {
    return {
      ...state,
      details: action.payload,
    };
  } else if (action.type === FORM_ACTION_TYPES.ADD_PHOTO) {
    return {
      ...state,
      photo: action.payload,
    };
  } else if (action.type === FORM_ACTION_TYPES.CREATE_COUNTRY) {
    return {
      ...state,
      country: action.payload,
    };
  } else if (action.type === FORM_ACTION_TYPES.CREATE_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else if (action.type === FORM_ACTION_TYPES.RESET) {
    return initFormState;
  }

  return state;
};

export const FormPage = () => {
  const [state, dispatch] = useReducer(reducer, initFormState);

  const reduxDispatch = useDispatch();

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    await reduxDispatch(addSongThunk(state));

    dispatch({ type: FORM_ACTION_TYPES.RESET });
  };

  const handleChangeInput = (event) => {
    if (event.target.name === FORM_ACTION_TYPES.ADD_PHOTO) {
      const formData = new FormData();

      formData.append('filename', event.target.files[0]);

      dispatch({
        type: event.target.name,
        payload: formData,
      });

      return;
    }

    dispatch({ type: event.target.name, payload: event.target.value });
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      autoComplete="off"
      encType="multipart/form-data"
    >
      <fieldset className={styles.wrapper}>
        <legend>Add new item</legend>
        <label>
          <InputText
            title="Band name"
            name={FORM_ACTION_TYPES.CREATE_BAND}
            onChange={handleChangeInput}
            value={state.band}
            required
          />
        </label>
        <label>
          <InputText
            title="Song name"
            name={FORM_ACTION_TYPES.CREATE_SONG}
            onChange={handleChangeInput}
            value={state.song}
            required
          />
        </label>
        <label>
          <InputText
            title="Country"
            name={FORM_ACTION_TYPES.CREATE_COUNTRY}
            onChange={handleChangeInput}
            value={state.country}
            required
          />
        </label>
        <label>
          <InputText
            title="City"
            name={FORM_ACTION_TYPES.CREATE_CITY}
            onChange={handleChangeInput}
            value={state.city}
          />
        </label>
        <InputFile
          title="Add photo"
          name={FORM_ACTION_TYPES.ADD_PHOTO}
          accept="image/*"
          onChange={handleChangeInput}
          value={state.photo}
        />
        <label>
          <TextArea
            name={FORM_ACTION_TYPES.CREATE_DETAILS}
            title="Add details"
            onChange={handleChangeInput}
            value={state.details}
            required
          />
        </label>
        <button type="submit">Confirm</button>
      </fieldset>
    </form>
  );
};
