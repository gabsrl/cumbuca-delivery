import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DishOverviewPage } from '../pages/menu/dish-overview';
import { Dishes } from '../pages/menu/dishes';
import { Home } from '../pages/manager/home';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route path="/dish" element={<DishOverviewPage />} />
        <Route path="/manager" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
