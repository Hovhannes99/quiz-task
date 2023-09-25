import "./configs/firebaseConfig/fireBase.config";
import Navigation from "./navigation/Navigation";
import Context from "./Context";


function App() {
  return (
      <>
          <Context>
              <Navigation />
          </Context>
      </>

  );
}

export default App;
