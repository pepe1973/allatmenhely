import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Home from './pages/Home';
import Csivavas from './components/Csivavas';
import './App.css';
import Dobermans from './components/Dobermans';
import Sziamis from './components/Sziamis';
import Brits from './components/Brits';

function App() {
    return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dogs' element={<Dogs />}>
                    <Route path='csivavas' element={<Csivavas />} />
                    <Route path='dobermans' element={<Dobermans />} />
                </Route>
                <Route path='/cats' element={<Cats />}>
                    <Route path='sziamis' element={<Sziamis />} />
                    <Route path='brits' element={<Brits />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;
