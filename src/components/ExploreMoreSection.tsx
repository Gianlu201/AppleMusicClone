import { Container, Row } from 'react-bootstrap';
import ExploreOption from './ExploreOption';

const ExploreMoreSection = () => {
  return (
    <Container>
      <h2>Altro da esplorare</h2>
      <Row className='mt-3'>
        <ExploreOption title='Esplora per generi' />
        <ExploreOption title='Decenni' />
        <ExploreOption title="Attività e stati d'animo" />
        <ExploreOption title='Worldwide' />
        <ExploreOption title='Classiche' />
        <ExploreOption title='Audio spaziale' />
        <ExploreOption title='Video musicali' />
        <ExploreOption title='Nuovi artisti' />
        <ExploreOption title='Hit del passato' />
      </Row>
    </Container>
  );
};

export default ExploreMoreSection;
