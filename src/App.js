import React, { Component } from "react";
import "./App.css";

class App extends Component {
    before = {
        a: 1,
        b: 2,
        c: {
            d: 1,
            e: 2
        }
    };
    state = {
        a: 1,
        b: 2,
        c: {
            d: 1,
            e: 2
        }
    };
    componentDidMount() {
        console.log("update starts");

        //batching
        // this.setState({ a: 0 });
        // this.setState({ b: 0 });
        // this.setState({ a: 1 });

        //shallow update
        //this.setState({ a: 0 });
        //this.setState({ c: { d: 2 } });
        //this.setState(prevState => ({ c: { ...prevState.c, d: 2 } }));
        console.log("update ends");
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Before</h2>
                    <code>{JSON.stringify(this.before)}</code>
                    <h2>After</h2>
                    <code>{JSON.stringify(this.state)}</code>
                </header>
            </div>
        );
    }
}

export default App;
