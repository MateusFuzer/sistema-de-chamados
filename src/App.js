
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import firebase from './services/firebaseConection'
import AuthProvider from './context/auth';
import  Routes from './routes'

function App() {
  return (
    <AuthProvider> {/* Dentro do AuthProvider tem um UseEfect que vai ser executado a carregar a pagina */}
      <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
