import Interview from '../components/Interview';

const interviews = [
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/32',
    id: '1',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/19',
    id: '2',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/22',
    id: '3',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/21',
    id: '4',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/22',
    id: '5',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/20',
    id: '6',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/20',
    id: '7',
  },
  {
    img: './Interviews_web_resources/IMG_8960.jpg',
    title: 'Lapse',
    date: '02/04/20',
    id: '8',
  },
];

export const Interviews = () => {
  var sorted_interviews = interviews
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return (
    <section>
      <div className='interview_container'>
        <h1>Interviews</h1>
        <div className='interviews'>
          {sorted_interviews.map((i) => (
            <Interview
              key={i.id}
              id={i.id}
              img={i.img}
              title={i.title}
              date={i.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interviews;
