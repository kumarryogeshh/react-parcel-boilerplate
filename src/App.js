import React, { lazy, Suspense, Component } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const Custom = lazy(() => import("./components/Custom"));
import "./custom.css";
class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>fetching components</div>}>
          <Navbar />
          <Custom />
        </Suspense>
      </div>
    );
  }
}
export default App;
