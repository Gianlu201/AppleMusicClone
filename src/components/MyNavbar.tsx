import { Button, Navbar } from 'react-bootstrap';
import { List, PersonFill } from 'react-bootstrap-icons';
import MusicPlayer from './MusicPlayer';
import VolumeControl from './VolumeControl';

interface MyNavbarProps {
  show: boolean;
  handleShow: VoidFunction;
  handleClose: VoidFunction;
}

const MyNavbar = (props: MyNavbarProps) => {
  return (
    <Navbar style={{ backgroundColor: '#2E2E2E' }}>
      <div className='d-lg-none d-flex justify-content-between align-items-center w-100'>
        <div className='ms-3'>
          <Button variant='link' onClick={props.handleShow}>
            <List size={'30px'} fill='red' />
          </Button>
        </div>
        <div>
          <img id='logo' src='/assets/logos/music.svg' alt='apple music logo' />
        </div>
        <div className=' me-4'>
          <a href='#' className='text-decoration-none text-danger fw-medium'>
            Accedi
          </a>
        </div>
      </div>

      <div className='d-none d-lg-flex justify-content-around w-100 '>
        <MusicPlayer />

        <div
          className='text-center'
          style={{ width: '40%', backgroundColor: '#4D4D4D' }}
        >
          <img
            src='/assets/logos/apple.svg'
            alt='apple logo'
            className='my-2'
          />
        </div>

        <VolumeControl />

        <Button
          className='btn-sm d-flex align-items-center fw-semibold'
          variant='danger'
        >
          <PersonFill className='me-1' />
          Accedi
        </Button>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
