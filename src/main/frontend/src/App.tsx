import Router from "@/Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((response) => response.json())
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="app">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
