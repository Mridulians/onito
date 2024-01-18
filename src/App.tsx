import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Form from "./component/Form";
import Table from "./component/Table";

const App: React.FC = () => {
  return (
    
        <Provider store={store}>
          <div className="App">
            <Form />
            <Table />
          </div>
        </Provider>
    
  );
};

export default App;
