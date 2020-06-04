import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;

  background: linear-gradient(
    to top,
    rgba(240, 47, 23, 1) 0%,
    rgba(213, 26, 20, 1) 50%,
    rgba(190, 8, 17, 1) 91%
  );

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    margin-top: 100px;
  }

  div {
    background: #fff;
    border-radius: 12px;

    -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);

    margin-top: 50px;

    width: 700px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    h2 {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    h1 {
      color: #787878;
    }

    h2 {
      margin-top: 20px;
      color: #8a8a8a;
    }

    form {
      margin-top: 50px;
      width: 100%;
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr 1fr;

      div {
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-items: center;
        box-shadow: none;

        label {
          font-size: 22px;
          font-weight: bold;
          color: #b0b0b0;
        }

        select,
        input {
          padding: 10px 0;
        }

        select {
          margin-top: 15px;
          width: 100%;
          border: 0;
          border-bottom: 1px solid #000;

          background: #fff;

          font-size: 22px;
          font-weight: bold;
          color: #787878;

          option {
            color: #787878;
          }
        }

        input {
          margin-top: 15px;
          width: 100%;
          border: 0;
          border-bottom: 1px solid #000;

          background: #fff;

          font-size: 22px;
          font-weight: bold;
          color: #787878;

          &::placeholder {
            color: #bfbfbf;
            font-size: 18px;
          }
        }
      }

      button {
        grid-column: 1 / 3;
        margin-top: 20px;
        padding: 10px 0;

        background: rgba(240, 47, 23, 1);

        color: #fff;
        font-size: 26px;
        font-weight: bold;

        border: 0;
        border-radius: 6px;

        transition: 0.2s;

        &:hover {
          background: ${shade(0.2, "rgba(240, 47, 23, 1)")};
        }
      }
    }
  }
`;

export const ResultContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  span {
    margin-top: 50px;
    font-size: 22px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    strong {
    }
  }

  button {
    grid-column: 1 / 3;
    margin-top: 20px;
    width: 100%;
    padding: 10px 0;

    background: rgba(240, 47, 23, 1);

    color: #fff;
    font-size: 26px;
    font-weight: bold;

    border: 0;
    border-radius: 6px;

    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, "rgba(240, 47, 23, 1)")};
    }
  }
`;
