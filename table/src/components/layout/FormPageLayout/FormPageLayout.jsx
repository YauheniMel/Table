import InputFile from '../../atoms/InputFile/InputFile';
import InputText from '../../atoms/InputText/InputText';
import TextArea from '../../atoms/TextArea/TextArea';
import styles from './FormPageLayout.module.scss';

export default function FormPageLayout({handleChangeInput, onSubmit, state}) {
  // need change legend content
  return (
    <form onSubmit={onSubmit}>
      <fieldset className={styles.wrapper}>
        <legend>Add new item</legend>
        <label>
          <InputText
            title="Band name"
            name="band"
            onChange={handleChangeInput}
            value={state.band}
          />
        </label>
        <label>
          <InputText
            title="Country"
            name="country"
            onChange={handleChangeInput}
            value={state.country}
          />
        </label>
        <label>
          <InputText
            title="City"
            name="city"
            onChange={handleChangeInput}
            value={state.city}
          />
        </label>
        {/* <label>
          <InputFile name="photo" title="Upload photo" />
        </label>
        <label>
          <InputFile name="song" title="Upload song" />
        </label> */}
        <label>
          <TextArea
            name="comment"
            title="Add comments"
            onChange={handleChangeInput}
            value={state.comment}
          />
        </label>
        <button type="submit">
          Confirm
        </button>
      </fieldset>
    </form>
  );
}
