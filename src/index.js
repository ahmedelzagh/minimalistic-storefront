// 3rd party imports
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
// Internal imports
import "./common/styles/default.scss";
import client from "./common/apollo-client";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
