import { ExplicitFill } from 'react-bootstrap-icons';

import { Track } from '../types/Track';

interface NewReleasedSongProps {
  track: Track;
}

const NewReleasedSong = (props: NewReleasedSongProps) => {
  return (
    <>
      <img
        src={props.track.album.cover_medium}
        alt='song poster'
        className=' img-fluid'
      />

      <div className='d-flex justify-content-between align-items-start'>
        <div>
          <p className='m-0'>{props.track.title_short}</p>
          <p>{props.track.artist.name}</p>
        </div>
        {props.track.explicit_lyrics && <ExplicitFill />}
      </div>
    </>
  );
};

export default NewReleasedSong;
