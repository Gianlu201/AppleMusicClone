import { Col } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

interface ExploreOptionProps {
  title: string;
}

const ExploreOption = (props: ExploreOptionProps) => {
  return (
    <Col xs={12} lg={4} className='mb-3'>
      <div
        className='d-flex justify-content-between align-items-center p-3 rounded-3'
        style={{ backgroundColor: '#2A2A2A' }}
      >
        <p className='text-danger m-0'>{props.title}</p>
        <ChevronRight fill='red' />
      </div>
    </Col>
  );
};

export default ExploreOption;
