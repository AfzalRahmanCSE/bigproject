//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { AuthContextProvider } from './context/AuthContext';
import Main from './components/Main';
import { ThemeContextProvider } from './context/ThemeContext';


function App() {

  return (
    <div >
      <ThemeContextProvider>

      <AuthContextProvider>
        <BrowserRouter>
        <Main/>
        </BrowserRouter>
      </AuthContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
