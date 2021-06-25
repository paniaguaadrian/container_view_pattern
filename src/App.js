// Composer npm hooks library
import composeHooks from "react-hooks-compose";

// Import our useUserData component
import { useUserData } from "./components/customhooks/useUserData";

// Custom Components
import Card from "./components/views/Card/Card";
// import CardContainer from "./components/containers/Card/CardContainer";

// Styles
import "./App.css";

// Composing card with our hook
const ComposedCard = composeHooks({ useUserData })(Card);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComposedCard />
        {/* <CardContainer /> */}
      </header>
    </div>
  );
}

export default App;
