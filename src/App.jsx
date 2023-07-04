import logo from './logo.svg';
import './App.css';
import Pages from './pages/pages';
import MyRoutes from './routes/routes.jsx';
import { useContext } from 'react';
function App() {
  return (
    <div className="App">
      <MyRoutes />
    </div>
  );
}

export default App;