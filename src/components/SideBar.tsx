import { useState } from 'react';
import { Container, Form, ListGroup, Offcanvas } from 'react-bootstrap';
import { Broadcast, Grid, HouseDoor, Search } from 'react-bootstrap-icons';

interface SideBarProps {
  show: boolean;
  handleClose: VoidFunction;
}

const SideBar = (props: SideBarProps) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Container
        className='sideBar d-none d-lg-block h-100'
        style={{ padding: '32px 30px' }}
      >
        <div>
          <img
            src='../../public/assets/logos/music.svg'
            alt='apple music logo'
          />
        </div>
        <Form
          className='mt-4'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group className='mb-3 position-relative'>
            <Search id='searchIcon' fill='#FF0000' />
            <Form.Control
              id='queryField'
              type='text'
              placeholder='Cerca'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='border-secondary border-opacity-50'
            />
          </Form.Group>
        </Form>
        <ListGroup variant='flush'>
          <ListGroup.Item className='border-0 bg-transparent text-white rounded-3'>
            <HouseDoor className='fs-5 me-2' fill='#ff0000' />
            Home
          </ListGroup.Item>
          <ListGroup.Item className='border-0 bg-transparent text-white rounded-3 active'>
            <Grid className='fs-5 me-2' fill='#ff0000' />
            Novità
          </ListGroup.Item>
          <ListGroup.Item className='border-0 bg-transparent text-white rounded-3'>
            <Broadcast className='fs-5 me-2' fill='#ff0000' />
            Radio
          </ListGroup.Item>
        </ListGroup>
      </Container>

      {props.show && (
        <Offcanvas show={props.show} onHide={props.handleClose} placement='top'>
          <Offcanvas.Header
            closeButton
            className='sideBar text-white'
            onClick={() => props.handleClose()}
          >
            <Offcanvas.Title>
              <img
                src='../../public/assets/logos/music.svg'
                alt='apple music logo'
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            className='sideBar text-white'
            style={{ minHeight: '100vh' }}
          >
            <Form
              className='mt-4'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group className='mb-3 position-relative'>
                <Search id='searchIcon' fill='#FF0000' />
                <Form.Control
                  id='queryField'
                  type='text'
                  placeholder='Cerca'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className='border-secondary border-opacity-50'
                />
              </Form.Group>
            </Form>
            <ListGroup variant='flush'>
              <ListGroup.Item className='border-0 bg-transparent text-white rounded-3'>
                <HouseDoor className='fs-5 me-2' fill='#ff0000' />
                Home
              </ListGroup.Item>
              <ListGroup.Item className='border-0 bg-transparent text-white rounded-3 active'>
                <Grid className='fs-5 me-2' fill='#ff0000' />
                Novità
              </ListGroup.Item>
              <ListGroup.Item className='border-0 bg-transparent text-white rounded-3'>
                <Broadcast className='fs-5 me-2' fill='#ff0000' />
                Radio
              </ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};
export default SideBar;
