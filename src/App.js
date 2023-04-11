import Login from './components/Login';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ProjectListing from'./components/ProjectListing';
import createproject from './components/CreateProject';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
  
   
   <Routes>
   <Route exact path="/" element={<Login />} />
   <Route exact path="/header" element={<Header />} />
   <Route exact path="/createproject" element={<createProject />} />
   <Route exact path="/projectlisting" element={<ProjectListing />} />
   <Route exact path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
