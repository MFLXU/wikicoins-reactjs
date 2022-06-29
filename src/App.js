
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './Components/index';
import { LandingPage, CoinsPage, About, Error, CoinPage } from './Pages/index';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<Error />} />
        <Route path="/Coins" element={<CoinsPage />} />
        <Route path='/coin' element={<CoinPage />}>
          <Route path=':coinId' element={<CoinPage />} />
        </Route>
        <Route path='/about' element={<About />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
