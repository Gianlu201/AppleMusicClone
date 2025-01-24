import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import NewsSection from './components/NewsSection';
import NewEpisodesSection from './components/NewEpisodesSection';
import NewReleasedSection from './components/NewReleasedSection';
import ExploreMoreSection from './components/ExploreMoreSection';
import Footer from './components/Footer';
import { Col, Row } from 'react-bootstrap';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Row>
        <Col lg={2} className=' d-none d-lg-block'>
          <SideBar />
        </Col>

        <Col xs={12} lg={10}>
          <MyNavbar />
          <main>
            <NewsSection />
            <NewEpisodesSection />
            <NewReleasedSection />
            <ExploreMoreSection />
          </main>

          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default App;
