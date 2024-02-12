import './Look.css';

const Look = (props) => {

  return (
    <div className='Look'>
        <div>
            <img src={props.fileUrl} alt={props.brand + " " + props.season} />
        </div>
        <div className='look-details-img'>
            <p>{props.brand}</p>
            <p>{props.season}</p>
        </div>
    </div>
  );
}

export default Look;
