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

      {/*             Route Handling                    */}

      <BrowserRouter>
        <Routes>

          {/* main route*/}
          <Route exact element={<MainComponent />} path="/" />

          {/* user adding form route*/}
          <Route exact path="/add-user" element={<UserAddComponent />} />

          {/* view user route*/}
          <Route path="/view-user/:id" element={<ViewUser />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
