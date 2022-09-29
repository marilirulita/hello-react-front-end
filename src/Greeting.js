import { useSelector, useDispatch } from 'react-redux';
import { getGrettingFetch } from './redux/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  const getFetch = () => {
    dispatch(getGrettingFetch());
  };

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button type="submit" onClick={getFetch} className="App-link">Get Greeting</button>
    </div>
  );
};

export default Greeting;
