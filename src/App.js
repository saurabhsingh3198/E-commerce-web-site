import SignupAndSignin from './Signup & signin/SignupAndSignin';
import { Route, Routes, useLocation } from "react-router-dom";
import AllProduct from './components/AllProduct';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Men from './components/AllProduct';
import Women from './components/AllProduct';
import Shoes from './components/AllProduct';
import { useEffect } from 'react';
import Wishlist from './components/Wishlist';
import Bag from './components/Bag';
import  Info  from './components/Info';

function App() {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  return (



    <div>
      {location.pathname === '/' ? <Routes>

        <Route path="/" element={<SignupAndSignin />} />
      </Routes>
        :
        <Header>
          <Footer>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/allproduct" element={<AllProduct />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/shoes" element={<Shoes />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </Footer>
        </Header>
      }

    </div>


  );
}

export default App;
