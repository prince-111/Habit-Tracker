import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import useHabitStore from "./store/store";
import AddHabitForm from "./components/addHabitForm";

function App() {
  // const store = useHabitStore();
  // console.log("store", store);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tacker
        </Typography>
        <AddHabitForm />
        {/* List  */}
        {/* Stats  */}
      </Box>
    </Container>
  );
}

export default App;
