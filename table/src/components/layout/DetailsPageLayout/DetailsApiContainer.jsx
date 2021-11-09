import axios from 'axios';
import { useEffect } from 'react';
import { getTargetLineContent } from '../../../store/reducers/actions';
import DetailsPageLayout from './DetailsPageLayout';

export default function DetailsApiContainer({ content, dispatch, match }) {
  useEffect(() => {
    axios
      .get(`/details/${match.params.id}`)
      .then((response) => response.data)
      .then((data) => dispatch(getTargetLineContent(...data)))
      .catch((err) => console.error(err));
  }, [match.params.id]);

  return (
    <DetailsPageLayout
      band={content.band}
      song={content.songName}
      date={content.datePost}
      history={content.history}
      photoURL={content.photoURL}
    />
  );
}
