import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import NewsSection from './components/NewsSection';
import NewEpisodesSection from './components/NewEpisodesSection';
import NewReleasedSection from './components/NewReleasedSection';
import ExploreMoreSection from './components/ExploreMoreSection';
import Footer from './components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from './components/SideBar';
import { useState } from 'react';
import MobilePlayer from './components/MobilePlayer';

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Row>
        <Col
          lg={2}
          className='d-none d-lg-block px-0 border-end border-secondary border-opacity-50'
        >
          <SideBar show={show} handleClose={handleClose} />
        </Col>

        <Col xs={12} lg={10} className='px-0'>
          <MyNavbar
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
          <Container className='px-3'>
            <NewsSection />
            <NewEpisodesSection />
            <NewReleasedSection />
            <ExploreMoreSection />
            <MobilePlayer />
          </Container>

          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default App;
