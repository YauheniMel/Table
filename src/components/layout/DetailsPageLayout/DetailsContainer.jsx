import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DetailsApiContainer from './DetailsApiContainer';

export default function DetailsContainer({ match }) {
  const content = useSelector((state) => state.reducer.targetLine);
  const dispatch = useDispatch(); // maybe in wrong place
  return (
    <DetailsApiContainer content={content} dispatch={dispatch} match={match} />
  );
}
