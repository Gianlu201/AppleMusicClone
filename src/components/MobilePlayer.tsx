import { PlayFill, SkipForwardFill } from 'react-bootstrap-icons';

const MobilePlayer = () => {
  return (
    <div
      id='mobilePlayer'
      className='d-lg-none d-flex justify-content-between align-items-center rounded-3 py-2'
    >
      <div
        className='ms-3 border border-secondary border-opacity-50 rounded-3'
        style={{ width: '50px' }}
      >
        <img
          src='../../public/assets/images/music.png'
          alt='ecdcomi'
          className=' img-fluid'
        />
      </div>

      <div className='me-3'>
        <PlayFill className='playerBtn me-2 display-1' />
        <SkipForwardFill className='playerBtn me-2 fs-3' />
      </div>
    </div>
  );
};

export default MobilePlayer;
