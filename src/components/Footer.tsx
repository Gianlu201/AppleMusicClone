import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container as={'footer'}>
      <div>
        <span>
          <span>Italia</span>
        </span>
        <span>
          <span>English (UK)</span>
        </span>
      </div>

      <div>
        <p className='m-0'>
          Copiright &copy; <b>Apple Inc.</b> Tutti i diritti riservati.
        </p>
      </div>

      <div>
        <span>Condizioni dei servizi internet</span>
        <span>Apple Music e privacy</span>
        <span>Avviso sui cookie</span>
        <span>Supporto</span>
        <span>Feedback</span>
      </div>
    </Container>
  );
};

export default Footer;
