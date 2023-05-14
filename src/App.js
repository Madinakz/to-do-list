
import './App.css';
import Footer from './Components/Footer/footers';
import Header from './Components/Header/header';
import MainPage from './Components/MainPage/mainpage';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header/>
        <MainPage />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
