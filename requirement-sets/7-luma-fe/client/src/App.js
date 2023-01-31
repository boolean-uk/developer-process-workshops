import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import 'normalize.css';

import LandingPage from './components/landing/LandingPage.js';
import ReferralForm from './components/referral/ReferralForm.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path='/' element={<LandingPage />} />
      <Route path='/referral' element={<ReferralForm />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
