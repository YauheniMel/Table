import TemplateLineTable from '../../molecules/TemplateLineTable/TemplateLineTable';

export default function TableBody({content, onChange}) {
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
      />
    );
  })
  return (
    <tbody>
      {tableItems}
    </tbody>
  );
}
