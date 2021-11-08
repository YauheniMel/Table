import InputText from '../../atoms/InputText/InputText';

export default function FormPageLayout() {

  // need change legend content
  return (
    <form>
      <fieldset>
        <legend>
          Add new item
        </legend>
        <label>
          <InputText
            title="Band name"
            name="band"
          />
        </label>
        <label>
          <InputText
            title="City"
            name="city"
          />
        </label>
        <label>
          <InputText
            title="Country"
            name="country"
          />
        </label>
      </fieldset>
    </form>
  );
}
