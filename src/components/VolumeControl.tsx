import { useEffect, useState } from 'react';
import {
  VolumeDownFill,
  VolumeOffFill,
  VolumeUpFill,
} from 'react-bootstrap-icons';

const VolumeControl = () => {
  const [volume, setVolume] = useState('50');

  useEffect(() => {
    document.getElementById('volume')!.style.background =
      'linear-gradient(to right, #9E9E9E 0%, #9E9E9E ' +
      volume +
      '%, #4d4d4d ' +
      volume +
      '%, #4d4d4d 100%)';
  }, [volume]);

  return (
    <div className='d-flex justify-content-center align-items-center gap-2'>
      {volume === '0' && <VolumeOffFill />}
      {parseInt(volume) > 0 && parseInt(volume) <= 50 && <VolumeDownFill />}
      {parseInt(volume) > 50 && <VolumeUpFill />}

      <input
        type='range'
        min='0'
        max='100'
        value={volume}
        onChange={(e) => {
          setVolume(e.target.value);
        }}
        id='volume'
      />
    </div>
  );
};

export default VolumeControl;
