import TemplateLineTable from '../../molecules/TemplateLineTable/TemplateLineTable';

export default function TableBody({ content, onChange, setEvaluation }) {
  const tableItems = content.map((item) => {
    return (
      <TemplateLineTable
        key={item.id}
        id={item.id}
        isChecked={item.isChecked}
        band={item.band}
        song={item.song}
        datePost={item.date}
        evaluation={item.evaluation}
        country={item.country}
        city={item.city}
        onChange={onChange}
        setEvaluation={setEvaluation}
      />
    );
  });
  return <tbody>{tableItems}</tbody>;
}
