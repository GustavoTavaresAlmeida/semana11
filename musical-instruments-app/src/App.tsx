import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CardsList } from './pages/CardsList';
import { TableList } from './pages/TableList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/cards" replace />} />
          <Route path="/cards" element={<CardsList />} />
          <Route path="/table" element={<TableList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;