import { Component } from "react";


function HighOrderTest() {
    return class extends Component {
        constructor(props) {
            super(props);
        }
 
        render() {
            return <h1> Hello </h1>
        }
    }
}
export default HighOrderTest;