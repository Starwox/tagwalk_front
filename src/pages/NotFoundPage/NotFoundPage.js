import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function NotFoundPage() {

  return (
    <div className="NotFoundPage">
        <Header />
        <Navbar />
            <h2>Page not found !</h2>
        <Footer />
    </div>
  );
}

export default NotFoundPage;
