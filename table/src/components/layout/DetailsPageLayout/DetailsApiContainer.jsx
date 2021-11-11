import axios from 'axios';
import { useEffect, useState } from 'react';
import { getTargetLineContent } from '../../../store/reducers/actions';
import DetailsPageLayout from './DetailsPageLayout';

export default function DetailsApiContainer({ content, dispatch, match }) {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`/details/${match.params.id}`)
      .finally(() => setIsLoading(false))
      .then((response) => response.data)
      .then((data) => dispatch(getTargetLineContent(...data)))
      .catch((err) => console.error(err));
  }, [match.params.id]);
  return (
    <DetailsPageLayout
      band={content.band}
      song={content.songName}
      date={content.datePost}
      comment={content.comment}
      photoName={content.photoName}
      isLoading={isLoading}
    />
  );
}
