import { Container, Form, ListGroup, Offcanvas } from 'react-bootstrap';

interface SideBarProps {
  show: boolean;
  handleClose: VoidFunction;
}

const screenSize = window.innerWidth > 992 ? true : false;

const SideBar = (props: SideBarProps) => {
  return (
    <>
      {screenSize && (
        <Container>
          <img
            src='../../public/assets/logos/music.svg'
            alt='apple music logo'
          />
        </Container>
      )}

      {!screenSize && (
        <Offcanvas show={props.show} onHide={props.handleClose}>
          <Offcanvas.Header
            closeButton
            className='text-white'
            style={{ backgroundColor: '#252526' }}
            onClick={() => props.handleClose()}
          >
            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            className='text-white'
            style={{ backgroundColor: '#252526' }}
          >
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
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
      )}
    </>
  );
};
export default SideBar;
