import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCamperRequestID } from '../../redux/campers/operations';

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { camperID } = useParams();

  console.log(camperID);
  useEffect(() => {
    dispatch(fetchCamperRequestID(camperID));
  }, [dispatch, camperID]);

  return <div>CamperDetailsPage</div>;
};

export default CamperDetailsPage;
