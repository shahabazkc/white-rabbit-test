import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainComponent from "./Components/main interface";
import UserAddComponent from "./Components/user add form";
import ViewUser from "./Components/view user/ViewUser";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact element={<MainComponent />} path="/" />
          <Route exact path="/add-user" element={<UserAddComponent />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
