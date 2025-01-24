import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container as={'footer'} className='py-3 px-4'>
      <div className='mb-3'>
        <span className='d-inline-block border-end border-secondary border-opacity-50 pe-3 me-2'>
          <span>Italia</span>
        </span>
        <span className='ms-1'>
          <span className='special'>English (UK)</span>
        </span>
      </div>

      <div className='mb-2'>
        <p className='special m-0'>
          Copiright &copy; 2024 <b>Apple Inc.</b> Tutti i diritti riservati.
        </p>
      </div>

      <div>
        <span className='special d-inline-block border-end border-secondary border-opacity-50 pe-2 me-2'>
          Condizioni dei servizi internet
        </span>
        <span className='special d-inline-block border-end border-secondary border-opacity-50 pe-2 me-2'>
          Apple Music e privacy
        </span>
        <span className='special d-inline-block border-end border-secondary border-opacity-50 pe-2 me-2'>
          Avviso sui cookie
        </span>
        <span className='special d-inline-block border-end border-secondary border-opacity-50 pe-2 me-2'>
          Supporto
        </span>
        <span className='special d-inline-block pe-2 me-2'>Feedback</span>
      </div>
    </Container>
  );
};

export default Footer;
