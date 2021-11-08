import InputFile from '../../atoms/InputFile/InputFile';
import InputText from '../../atoms/InputText/InputText';
import TextArea from '../../atoms/TextArea/TextArea';
import styles from './FormPageLayout.module.scss';

export default function FormPageLayout() {
  // need change legend content
  return (
    <form>
      <fieldset className={styles.wrapper}>
        <legend>Add new item</legend>
        <label>
          <InputText title="Band name" name="band" />
        </label>
        <label>
          <InputText title="Country" name="country" />
        </label>
        <label>
          <InputText title="City" name="city" />
        </label>
        <label>
          <InputFile name="photo" title="Upload photo" />
        </label>
        <label>
          <InputFile name="song" title="Upload song" />
        </label>
        <label>
          <TextArea name="comment" title="Add comments" />
        </label>
      </fieldset>
    </form>
  );
}
