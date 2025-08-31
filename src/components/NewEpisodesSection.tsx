import { Col, Container, Row } from 'react-bootstrap';
import NewEpisodeElement from './NewEpisodeElement';
import { ChevronRight } from 'react-bootstrap-icons';

const NewEpisodesSection = () => {
  return (
    <Container className='mt-4'>
      <h5 className='mb-2 d-flex align-items-baseline'>
        Nuovi episodi radio <ChevronRight className='h6 ms-2' />
      </h5>

      <Row xs={3} lg={5}>
        <Col>
          <NewEpisodeElement
            imgUrl='/assets/images/2a.png'
            description='Prólogo con Abuelo'
            isExplicit={true}
          />
        </Col>
        <Col>
          <NewEpisodeElement
            imgUrl='/assets/images/2b.png'
            description='The Wanderer'
            isExplicit={false}
          />
        </Col>
        <Col>
          <NewEpisodeElement
            imgUrl='/assets/images/2c.png'
            description='Michael Bublé & Carly Pearce'
            isExplicit={false}
          />
        </Col>
        <Col className=' d-none d-lg-block'>
          <NewEpisodeElement
            imgUrl='/assets/images/2e.png'
            description='Stephan Moccio: The Zane Lowe Interview'
            isExplicit={false}
          />
        </Col>
        <Col className=' d-none d-lg-block'>
          <NewEpisodeElement
            imgUrl='/assets/images/2f.png'
            description='Chart Spotlight: Julia Michaels'
            isExplicit={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewEpisodesSection;
