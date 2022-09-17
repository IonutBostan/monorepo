import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>
        <div className="w-fit mx-auto my-4 grid grid-flow-col auto-cols-max gap-8">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="h-24 m-6" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              className="h-24 m-6 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>
        <article className="prose">
          <h1>
            Vite + Vitest + React + Turborepo + Dependabot + Github Actions
          </h1>
          <div>
            <button
              className="py-2 px-6 bg-blue-300 rounded-md font-medium"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p>Click on the Vite and React logos to learn more</p>
        </article>
      </div>
    </Fragment>
  );
}

export default App;
