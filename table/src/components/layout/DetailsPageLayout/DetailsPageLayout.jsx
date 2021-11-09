export default function DetailsPageLayout({ band, song, date, history, photoURL }) {
  return (
    <div>
      <h3>{band}</h3>
      <strong>{song}</strong>
      <time>{date}</time>
      <p>{history}</p>
      <img src={photoURL} alt="" />
    </div>
  );
}
