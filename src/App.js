import logo from './logo.svg';
import './App.css';


import Header from './components/header';
import Contant from './components/contant';
import Footer from './components/footer';
function App() {
  return (
    <div className="container">
      <Header />
      <Contant/>
      <Footer/>
    </div>
  );
}

export default App;
