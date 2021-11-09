import axios from 'axios';
import { useEffect } from 'react';
import { getTargetLineContent } from '../../../store/reducers/actions';

export default function DetailsApiContainer({content, dispatch}) {
  useEffect(() => {
    axios
      .get('/details/4')
      .then(response => response.data)
      .then(data => dispatch(getTargetLineContent(...data)))
      .catch(err => console.error(err));
  },[]);

  // need move in presentation componet
  return (
    <div>
      <h3>{content.band}</h3>
      <strong>{content.songName}</strong>
      <time>{content.datePost}</time>
      <p>{content.history}</p>
    </div>
  );
}
