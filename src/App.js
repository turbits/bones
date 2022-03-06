import "./App.css";

import Layout from "./components/Layout";
import RollerPanel from "./components/RollerPanel";
import RollerView from "./components/RollerView";

function App() {
  return (
    <Layout>
      <RollerView />
      <RollerPanel />
    </Layout>
  );
}

export default App;
