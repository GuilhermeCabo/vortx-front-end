import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;
