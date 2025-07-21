import logo from './logo.svg';
import './App.css';
import { SignUp } from './authentication/SignUp';
import  Layout from './layout/Layout';
import { Button, Typography, Stack } from '@mui/material';
import  { Home } from './mortgages-processing/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       {/* <Layout
          header={<Header />}
          left={
            <LeftHome />
          }
          right={<Home />}
          footer={<Typography>Copyright &copy; {new Date().getFullYear()} Mortgage Agentic</Typography>}
        /> */}

   <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
