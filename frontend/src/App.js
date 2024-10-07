// import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import { Navigate,BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      //  <EmployeeList/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/employees'}/>} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/AddEmployee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
