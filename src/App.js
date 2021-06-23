import Navi from './components/Navi';
import TopPage from './components/TopPage';
import SearchArea from './components/SearchArea';
import CardsSection from './components/CardsSection';
import LastPage from './components/LastPage';
import './style/app.css'
function App() {
  return (
    <div className="App">
      <Navi />
      <TopPage />
      <SearchArea />
      <CardsSection />
      <LastPage />
    </div>
  );
}

export default App;
