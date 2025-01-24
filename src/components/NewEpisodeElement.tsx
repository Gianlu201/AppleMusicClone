import { ExplicitFill } from 'react-bootstrap-icons';

interface NewEpisodeElementProps {
  imgUrl: string;
  description: string;
  isExplicit: boolean;
}

const NewEpisodeElement = (props: NewEpisodeElementProps) => {
  return (
    <>
      <img src={props.imgUrl} width={'100%'} className=' rounded-3' />
      <div className='d-flex justify-content-between align-items-center'>
        <span>{props.description}</span>
        {props.isExplicit && <ExplicitFill />}
      </div>
    </>
  );
};

export default NewEpisodeElement;
