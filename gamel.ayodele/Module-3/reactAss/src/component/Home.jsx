import React from "react";
import ContactList from "./ContactList";
import { useContext } from "react";
import InfoContext from "../context/InfoContext";

function Home({ onDelete }) {
  const { infos } = useContext(InfoContext);

  return (
    <div className="container">
      <div className=" main">
        <h2>Contact Manager</h2>
        <p>This is a portfolio project to showcase knowledge of:</p>
        <ol>
          <li>React Components and Jsx.</li>
          <li>React Router.</li>
          <li>Context api for global state management</li>
          <li>
            Making asynchronous calls to the json placeholder fake rest api
            using "async/await"
          </li>
        </ol>
      </div>

      {infos.map((info) => (
        <ContactList key={info.id} info={info} />
      ))}
    </div>
  );
}

export default Home;
