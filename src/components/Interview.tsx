// @ts-nocheck

import { Link } from 'react-router-dom';
function Interview({ id, img, date, title }) {
  return (
    <Link to={`/interviewDetails/${id}`}>
      <div className='interview'>
        <img src={img} />
        <div>{title}</div>
        <div>{date}</div>
      </div>
    </Link>
  );
}

export default Interview;
