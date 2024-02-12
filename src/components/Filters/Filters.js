import './Filters.css';

function Filters(props) {
  const handleSearchChange = (event) => {
    props.setSearchTerm(event.target.value);
    props.setCurrentPage(1);
  };

  return (
    <div className='Filters'>
      <input
        type="text"
        placeholder="Search by tag..."
        value={props.searchTerm}
        onChange={handleSearchChange}
        className='filter-input'
      />
    </div>
  );
}

export default Filters;
