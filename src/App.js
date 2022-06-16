import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/Container';

import MainHeader from './components/MainHeader';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Router>
      <MainHeader />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
