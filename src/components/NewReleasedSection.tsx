import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

import { Track } from '../types/Track';
import NewReleasedSong from './NewReleasedSong';

const NewReleasedSection = () => {
  const [songs, setSongs] = useState<Track[]>([]);

  const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

  const getSongs = async () => {
    try {
      const response = await fetch(URL + 'coldplay');
      if (response.ok) {
        const data = await response.json();
        setSongs(data.data);
      } else {
        throw new Error('Errore nel recupero dati!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <Container className='mt-4'>
      <h2>
        Nuove uscite <ChevronRight />
      </h2>

      <Row xs={3} lg={5}>
        {songs.map((song) => {
          return (
            <Col key={song.id} className='mb-3'>
              <NewReleasedSong track={song} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default NewReleasedSection;
