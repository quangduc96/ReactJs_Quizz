import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerLayout from './shared/layouts/CustomerLayout';
import { AuthProvider } from './contexts/auth.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/management/AdminDashboard';
import AnonymousRoute from './shared/components/AnonymousRoute';
import AnonymousLayout from './shared/layouts/AnonymousLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ManagementLayout from './shared/layouts/ManagementLayout';

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

            {/* Admin Router */}
            <Route >
              <Route path="/management/dashboard" element={<ManagementLayout><AdminDashboard /></ManagementLayout>} />
              {/* <Route path="/manager/amenities" element={<ManagementLayout><AmenityList /></ManagementLayout>} />
              <Route path="/manager/rooms" element={<ManagementLayout><RoomList /></ManagementLayout>} /> */}
            </Route>

            {/* Auth Router */}
            <Route element={<AnonymousRoute />}>
              <Route path="/auth/login" element={<AnonymousLayout><Login /></AnonymousLayout>} />
              <Route path="/auth/register" element={<AnonymousLayout><Register /></AnonymousLayout>} />
            </Route>
          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
