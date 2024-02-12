import './Search.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Look from '../../components/Look/Look';
import Footer from '../../components/Footer/Footer';
import Filters from '../../components/Filters/Filters';
import fetchLooks from '../../services/looksManager';
import {useState, useEffect} from 'react';


function Search() {

  const [looks, setLooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [looksPerPage, setLooksPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const looksToDisplay = searchTerm
    ? looks.filter(look => look.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    : looks;
  const indexOfLastLook = currentPage * looksPerPage;
  const indexOfFirstLook = indexOfLastLook - looksPerPage;
  const currentLooks = looksToDisplay.slice(indexOfFirstLook, indexOfLastLook);
  const pageCount = Math.ceil(looksToDisplay.length / looksPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const token = localStorage.getItem('login');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLooks(); 
        setLooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="Search">
        <Header />
        <Navbar />
        <Filters looks={looks} setSearchTerm={setSearchTerm} searchTerm={searchTerm} setCurrentPage={setCurrentPage}/>
        <div className='container-search'>
        {currentLooks.length > 0 ? (
          currentLooks.map(look => (                
          <Look 
            key={look.id}
            id={look.id}
            fileUrl={look.fileUrl}
            brand={look.brand}
            season={look.season}
            tags={look.tags}
            editable={token}
          />))
        ) : searchTerm === '' ? (
          looks.map(look => (                
            <Look 
              key={look.id}
              id={look.id}
              fileUrl={look.fileUrl}
              brand={look.brand}
              season={look.season}
              tags={look.tags}
              editable={token}
            />))
        ) : (
          <p>Nothing found for: {searchTerm}.</p>

        )}
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map(number => (
            <button key={number + 1} onClick={() => paginate(number + 1)} className='pagination-button'>
              {number + 1}
            </button>
          ))}
        </div>
        <Footer />
    </div>
  );
}

export default Search;
