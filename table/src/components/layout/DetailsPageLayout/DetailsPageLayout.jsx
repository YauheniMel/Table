import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DetailsApiContainer from './DetailsApiContainer';

export default function DetailsPageLayout() {
  const content = useSelector((state) => state.reducer.targetLine);
  const dispatch = useDispatch(); // maybe in wrong place
  return (
    <DetailsApiContainer
      content={content}
      dispatch={dispatch}
    />
  );
}
