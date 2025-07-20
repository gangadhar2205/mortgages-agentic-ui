import logo from './logo.svg';
import './App.css';
import { SignUp } from './authentication/SignUp';
import { Layout } from './layout/Layout';
import { Button, Typography, Stack } from '@mui/material';


function App() {
  return (
    <div className="App">
       <Layout
          header={<Typography variant="h4">Mortgage Agentic - Portal</Typography>}
          left={
            <Stack spacing={2}>
              <Typography variant="h6">Navigation</Typography>
              <Button variant="contained">Home</Button>
              <Button variant="outlined">Profile</Button>
              <Button variant="outlined">Help</Button>
            </Stack>
          }
          right={<SignUp />}
          footer={<Typography>Copyright &copy; {new Date().getFullYear()} Mortgage Agentic</Typography>}
        />
    </div>
  );
}

export default App;
