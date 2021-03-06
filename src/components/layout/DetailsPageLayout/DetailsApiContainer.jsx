import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
      .catch((err) => toast(err));
  }, [match.params.id]);
  return (
    <DetailsPageLayout
      band={content.band}
      song={content.song}
      date={content.date}
      comment={content.comment}
      photoName={content.photoName}
      isLoading={isLoading}
    />
  );
}
