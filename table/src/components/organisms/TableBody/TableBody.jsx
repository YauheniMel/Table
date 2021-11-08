import TemplateLineTable from '../../molecules/TemplateLineTable/TemplateLineTable';

export default function TableBody({content, onChange, setEvaluation}) {
  const tableItems = content.map((item) => {
    return (
      <TemplateLineTable
        key={item.id}
        id={item.id}
        isChecked={item.isChecked}
        band={item.band}
        songName={item.songName}
        datePost={item.datePost}
        evaluation={item.evaluation}
        location={item.location}
        onChange={onChange}
        setEvaluation={setEvaluation}
      />
    );
  })
  return (
    <tbody>
      {tableItems}
    </tbody>
  );
}
