import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './pages/Search/Search';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/Login/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route component={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
