import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerLayout from './shared/layouts/CustomerLayout';
import { AuthProvider } from './contexts/auth.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quizzes from './pages/Quizzes';
import AnonymousRoute from './shared/components/AnonymousRoute';
import AnonymousLayout from './shared/layouts/AnonymousLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ManagementLayout from './shared/layouts/ManagementLayout';
import PrivateRoute from './shared/components/PrivateRoute';
import QuestionList from './pages/management/question/QuestionList';
import QuizzList from './pages/management/quizz/QuizzList';
import UserList from './pages/management/user/UserList';
import RoleList from './pages/management/role/RoleList';
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import Custom403Page from './shared/components/Custom403Page';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <div className="main-content min-h-screen flex flex-col">
          <Routes>
            {/* Customer Router */}
            <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
            <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
            <Route path="/contact" element={<CustomerLayout><Contact /></CustomerLayout>} />
            <Route path="/quizzes" element={<CustomerLayout><Quizzes /></CustomerLayout>} />

            {/* Admin Router */}
            <Route element={<PrivateRoute />}>
              <Route path="/management/quizz" element={<ManagementLayout><QuizzList /></ManagementLayout>} />
              <Route path="/management/question" element={<ManagementLayout><QuestionList /></ManagementLayout>} />
              <Route path="/management/role" element={<ManagementLayout><RoleList /></ManagementLayout>} />
              <Route path="/management/user" element={<ManagementLayout><UserList /></ManagementLayout>} />
              <Route path="/403" element={<ManagementLayout><Custom403Page /></ManagementLayout>} />
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
