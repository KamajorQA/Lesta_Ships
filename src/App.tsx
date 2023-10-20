import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import { MainLayout } from './layouts/MainLayout';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
// const SingleCatPage = lazy(() => import('./pages/SingleCatPage'));
// const FavoritePage = lazy(() => import('./pages/FavoritePage'));
// const CreateCatPage = lazy(() => import('./pages/CreateCatPage'));
// const UserInfoPage = lazy(() => import('./pages/UserInfoPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="ships/:shipId" element={<SingleShipPage />} /> */}
            {/* <Route path="favorites" element={<FavoritePage />} /> */}
            {/* <Route path="userinfo" element={<UserInfoPage />} /> */}
            {/* <Route path="newcat" element={<CreateCatPage />} /> */}
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
