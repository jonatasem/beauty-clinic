import './styles/App.scss';
import Header from './components/Header/Header'
import IntroPage from './pages/intro/IntroPage';

function App() {
  return (
    <div className="container-app">
      <Header />
      <IntroPage />
      <div className="layout-app"></div>
    </div>
  );
}

export default App;