import { useState } from 'react';
import { Button, Form, ListGroup, Navbar, Offcanvas } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      className='d-flex justify-content-between'
      style={{ backgroundColor: '#2E2E2E' }}
    >
      <div className='ms-3'>
        <Button variant='link' onClick={handleShow}>
          <List size={'30px'} fill='red' />
        </Button>
      </div>
      <div>
        <img
          id='logo'
          src='../../public/assets/logos/music.svg'
          alt='apple music logo'
        />
      </div>
      <div className=' me-4'>
        <a href='#' className='text-decoration-none text-danger fw-medium'>
          Accedi
        </a>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          className='text-white'
          style={{ backgroundColor: '#252526' }}
        >
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          className='text-white'
          style={{ backgroundColor: '#252526' }}
        >
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Control type='text' placeholder='Cerca' />
            </Form.Group>
          </Form>

          <ListGroup variant='flush'>
            <ListGroup.Item className='border-0'>Home</ListGroup.Item>
            <ListGroup.Item className='border-0'>Novità</ListGroup.Item>
            <ListGroup.Item className='border-0'>Radio</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
