import TemplateLineTable from '../../molecules/TemplateLineTable/TemplateLineTable';

export default function TableBody({
  content,
  onChange,
  onDeleteLine,
  onChangeEvaluation,
}) {
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
        onDeleteLine={onDeleteLine}
        onChangeEvaluation={onChangeEvaluation}
      />
    );
  });
  return <tbody>{tableItems}</tbody>;
}
