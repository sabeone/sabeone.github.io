import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import SinglePost from "./pages/SinglePost";
import Post from "./pages/Post";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Experience} path="/experience" />
        <Route component={SinglePost} path="/projects/:slug" />
        <Route component={Post} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
