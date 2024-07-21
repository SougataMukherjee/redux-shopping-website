import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import NavBar from "./Components/NavBar.jsx";
import { Provider } from "react-redux";
import store from './store/store'
import { PersistGate} from 'redux-persist/integration/react'
import {persistStore } from 'redux-persist'

function App() {
  // let persistor=persistStore(store)
  return (
    <>
    <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default App;
