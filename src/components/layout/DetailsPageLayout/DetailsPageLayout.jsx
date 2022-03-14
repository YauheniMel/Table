import Loader from '../../atoms/Loader/Loader';

export default function DetailsPageLayout({
  band,
  song,
  date,
  comment,
  photoName,
  isLoading,
}) {
  return (
    <div>
      {isLoading && <Loader />}
      <h3>{band}</h3>
      <strong>{song}</strong>
      <time>{date}</time>
      <p>{comment}</p>
      <img src={window.location.origin + '/photo/' + photoName} alt="photo" />
    </div>
  );
}
