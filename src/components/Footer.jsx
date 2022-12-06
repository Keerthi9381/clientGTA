import React, { Component } from "react";

// const Footer = () => {
//     return (
//         <div>
//             <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
//     <div className="container text-center">
//       <small>Copyright &copy; GTA</small>
//     </div>
//   </footer>
//         </div>

//      );
// }

// export default Footer;

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer
          id="sticky-footer"
          className="flex-shrink-0 py-4 bg-dark text-white-50"
          style={{
            backgroundColor: "lightblue",
            position: "fixed",
            bottom: "0",
            width: "100%",
            overflow: "hidden"
          }}
        >
          <div className="container text-center">
            <small>Copyright &copy; GTA</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
