import React from "react";
import ReactDOM from "react-dom";
const App = () => {
    return (
        <div>
            <p>React here!</p>
            <p>Hello World!</p>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));