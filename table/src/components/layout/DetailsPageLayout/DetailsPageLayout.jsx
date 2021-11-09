export default function DetailsPageLayout({ band, song, date, comment, photoURL }) {
  return (
    <div>
      <h3>{band}</h3>
      <strong>{song}</strong>
      <time>{date}</time>
      <p>{comment}</p>
      <img src={photoURL} alt="" />
    </div>
  );
}
