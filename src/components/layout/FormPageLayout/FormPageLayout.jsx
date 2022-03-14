import React from 'react';
import InputFile from '../../atoms/InputFile/InputFile';
import InputText from '../../atoms/InputText/InputText';
import Loader from '../../atoms/Loader/Loader';
import TextArea from '../../atoms/TextArea/TextArea';
import styles from './FormPageLayout.module.scss';

export default function FormPageLayout({
  handleChangeInput,
  onSubmit,
  state,
  handleChangeInputFile,
  isLoading,
}) {
  // need change legend content

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      {isLoading && <Loader />}
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
            title="Song name"
            name="song"
            onChange={handleChangeInput}
            value={state.song}
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
        <InputFile
          name="photo"
          title="Upload photo"
          accept="image/*"
          onChange={handleChangeInputFile}
        />
        <label>
          <TextArea
            name="comment"
            title="Add comments"
            onChange={handleChangeInput}
            value={state.comment}
          />
        </label>
        <button type="submit">Confirm</button>
      </fieldset>
    </form>
  );
}
