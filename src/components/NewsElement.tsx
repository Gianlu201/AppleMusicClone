interface NewsElementProps {
  description: string;
  imgUrl: string;
}

const NewsElement = (props: NewsElementProps) => {
  return (
    <div className='d-block'>
      <h5>NUOVA STAZIONE RADIO</h5>
      <p>{props.description}</p>
      <img
        src={props.imgUrl}
        alt='radio poster'
        className=' rounded-5'
        width={'450px'}
      />
    </div>
  );
};

export default NewsElement;
