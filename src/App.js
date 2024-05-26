import HeaderComponent from "./components/headerComponent";
import LoginPage from "./pages/login/loginPage";
import Stack from '@mui/material/Stack';
import { teal } from "@mui/material/colors";
import Container from '@mui/material/Container';
import { Paper } from "@mui/material";


function App() {
  return (
      <Container maxWidth="false" disableGutters>
        <Paper style={{ background: teal[500], height: '100vh'}} square>
          <Stack spacing={5} justifyContent="center" alignItems="center">
              <HeaderComponent/>
              <LoginPage/>  
          </Stack>
        </Paper>
      </Container> 
  );
}

export default App;
