import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import SigninComponent from "./routes/Authentication/Signin.component";

function Shop() {
  return (
    <div>
      <h1>Hello Aamir!</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SigninComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
