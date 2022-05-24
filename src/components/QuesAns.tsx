// @ts-nocheck

function QuesAns({ ques, ans }) {
  return (
    <div className='ques_ans'>
      <p style={{ fontWeight: 'bold' }}>{ques}</p>
      <p>{ans}</p>
    </div>
  );
}

export default QuesAns;
