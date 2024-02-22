import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DishOverviewPage } from '../pages/menu/dish-overview';
import { Dishes } from '../pages/menu/dishes';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route path="/dish" element={<DishOverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
