import './Look.css';
import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';

const Look = (props) => {
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if(props.editable !== null) {
      const brandEmployee = props.editable.split(',').slice(1).join(','); 
      if (brandEmployee === props.brand) {
        setEditable(true);
      }
    }
  }, [props])
  return (
    <div className='Look'>
        <div className='position-relative'>
            <img src={props.fileUrl} alt={props.brand + " " + props.season} />
            {editable ? <Icon icon="ri:edit-line" className='icon-look'/> : ''}
        </div>
        <div className='look-details-img'>
            <p>{props.brand}</p>
            <p>{props.season}</p>
        </div>
    </div>
  );
}

export default Look;
