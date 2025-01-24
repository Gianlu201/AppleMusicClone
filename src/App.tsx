import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import NewsSection from './components/NewsSection';
import NewEpisodesSection from './components/NewEpisodesSection';
import NewReleasedSection from './components/NewReleasedSection';

function App() {
  return (
    <>
      <MyNavbar />
      <main>
        <NewsSection />
        <NewEpisodesSection />
        <NewReleasedSection />
      </main>
    </>
  );
}

export default App;
