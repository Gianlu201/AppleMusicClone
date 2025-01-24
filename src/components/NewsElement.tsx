interface NewsElementProps {
  description: string;
  imgUrl: string;
}

const NewsElement = (props: NewsElementProps) => {
  return (
    <div className='d-block'>
      <h6 className='newsElementTitle text-secondary m-0'>
        NUOVA STAZIONE RADIO
      </h6>
      <p className='newsElementDescription mb-4'>{props.description}</p>
      <img
        src={props.imgUrl}
        alt='radio poster'
        className='newsElementImg rounded-5'
        width={'520px'}
      />
    </div>
  );
};

export default NewsElement;
