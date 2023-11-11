import {BrowserRouter} from "react-router-dom";

import './App.css'
import NavigationBar from "./features/navBar/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./features/footer/index.jsx";
import AppRouter from "./router/index.jsx";



function App() {
  return (
      <BrowserRouter>
          <div className={"main-container"}>
              <div className="main-content-box">
                  <NavigationBar/>
                  <AppRouter />
              </div>
          </div>
          <div>
              <Footer/>
          </div>
    </BrowserRouter>
  )
}

export default App
