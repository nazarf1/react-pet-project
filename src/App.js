import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Detail from "./components/Detail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/employee/:id" component={Detail} />
    </Switch>
  );
}

export default App;
