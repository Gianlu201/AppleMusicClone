import {
  PlayFill,
  Repeat,
  Shuffle,
  SkipBackwardFill,
  SkipForwardFill,
} from 'react-bootstrap-icons';

const MusicPlayer = () => {
  return (
    <div className='w-25 text-center my-auto'>
      <Shuffle className='playerBtn me-2 fs-6' />
      <SkipBackwardFill className='playerBtn me-2 fs-6' />
      <PlayFill className='playerBtn me-2 fs-2' />
      <SkipForwardFill className='playerBtn me-2 fs-6' />
      <Repeat className='playerBtn me-2 fs-6' />
    </div>
  );
};

export default MusicPlayer;
