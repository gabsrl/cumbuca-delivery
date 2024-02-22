import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dishes } from '../pages/menu/dishes';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dishes />} />
      </Routes>
    </BrowserRouter>
  );
}
