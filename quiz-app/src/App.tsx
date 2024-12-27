import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerLayout from './shared/layouts/CustomerLayout';
import { AuthProvider } from './contexts/auth.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/management/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="main-content min-h-screen flex flex-col">
          <Routes>
            {/* Customer Router */}
            <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
            <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
            <Route path="/contact" element={<CustomerLayout><Contact /></CustomerLayout>} />
            <Route path="/management/dashboard" element={<CustomerLayout><AdminDashboard /></CustomerLayout>} />

            {/* Admin Router */}
            {/* <Route element={<PrivateRoute />}>
              <Route path="/manager/dashboard" element={<ManagerLayout><AdminDashboard /></ManagerLayout>} />
              <Route path="/manager/amenities" element={<ManagerLayout><AmenityList /></ManagerLayout>} />
              <Route path="/manager/rooms" element={<ManagerLayout><RoomList /></ManagerLayout>} />
            </Route> */}

            {/* Auth Router */}
            {/* <Route element={<AnonymousRoute />}>
              <Route path="/auth/login" element={<AnonymousLayout><Login /></AnonymousLayout>} />
              <Route path="/auth/register" element={<AnonymousLayout><Register /></AnonymousLayout>} />
            </Route> */}
          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
