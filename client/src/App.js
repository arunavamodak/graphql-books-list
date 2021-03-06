import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Booklist from "./components/Booklist";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL Library App</h1>
        <Booklist />
      </div>
    </ApolloProvider>
  );
}

export default App;
