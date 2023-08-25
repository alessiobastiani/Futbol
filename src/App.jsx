import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ShoppingCartProvider from './contex/ShoppingCartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Catalogo from './components/Catalogo';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Comprar from './components/Comprar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoadingComponent from './components/LoadingComponent';
import music from './assets/musiquita.mp3'

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      if (user && audioRef.current) {
        audioRef.current.play();
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <LoadingComponent/>;
  }

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        {user && <NavBar />}
        <div className='app-conteiner'>
            <audio ref={audioRef} src={music} autoPlay loop />
          <ToastContainer />
          <Routes>
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
            <Route path='/signup' element={<Signup />} />
            {user ? (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/catalogoCompleto' element={<Catalogo />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/categoria/:categoria' element={<ItemListContainer />} />
                <Route path='/Item/:itemId' element={<ItemDetailConteiner />} />
                <Route path='/Comprar' element={<Comprar />} />
              </>
            ) : (
              // Si el usuario no está autenticado, solo se muestra el componente Login
              <Route path='/' element={<Login />} />
            )}
          </Routes>
        </div>
        {user && <Footer />}
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;

