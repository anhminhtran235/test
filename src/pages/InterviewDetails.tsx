// @ts-nocheck
import { useParams } from 'react-router-dom';

import InterviewDetail_1 from '../components/InterviewDetails/InterviewDetails_1';
import InterviewDetail_2 from '../components/InterviewDetails/InterviewDetails_2';
import InterviewDetail_3 from '../components/InterviewDetails/InterviewDetails_3';
import InterviewDetail_4 from '../components/InterviewDetails/InterviewDetails_4';
import InterviewDetail_5 from '../components/InterviewDetails/InterviewDetails_5';
import InterviewDetail_6 from '../components/InterviewDetails/InterviewDetails_6';
import InterviewDetail_7 from '../components/InterviewDetails/InterviewDetails_7';
import InterviewDetail_8 from '../components/InterviewDetails/InterviewDetails_8';

export const InterviewDetails = () => {
  const { id } = useParams();
  return getInterviewDetail(id);
};

const getInterviewDetail = (id) => {
  switch (id) {
    case '1':
      return <InterviewDetail_1 />;
    case '2':
      return <InterviewDetail_2 />;
    case '3':
      return <InterviewDetail_3 />;
    case '4':
      return <InterviewDetail_4 />;
    case '5':
      return <InterviewDetail_5 />;
    case '6':
      return <InterviewDetail_6 />;
    case '7':
      return <InterviewDetail_7 />;
    case '8':
      return <InterviewDetail_8 />;
  }
};

export default InterviewDetails;
