import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "4rem" }}>Encontre sua vaga de emprego</h1>
      <p class="search-banner__subtitle">São mais de 12.000 vagas</p>
      <div class="container-fluid">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Digite cargo cidade ou estado"
            aria-label="Search"
          ></input>
          <button type="button" class="btn btn-primary">
            Buscar
          </button>
        </form>
        <div
          class="btn-group "
          style={{ marginTop: "1rem" }}
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="btn btn-secondary vagas">
            {" "}
            <svg
              width="18"
              height=""
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-.164 6.014-4.345.725 3.29-4.113a1 1 0 0 0-.227-1.457l-6-4a.999.999 0 0 0-1.262.125l-4 4 1.414 1.414 3.42-3.42 2.584 1.723-2.681 3.352a5.913 5.913 0 0 0-5.5.752l1.451 1.451A3.972 3.972 0 0 1 6 10c2.206 0 4 1.794 4 4 0 .739-.216 1.425-.566 2.02l1.451 1.451A5.961 5.961 0 0 0 12 14c0-.445-.053-.878-.145-1.295L15 12.181V18h2v-7a.999.999 0 0 0-1.164-.986ZM6 18c-2.206 0-4-1.794-4-4 0-.739.216-1.425.566-2.02l-1.451-1.451A5.961 5.961 0 0 0 0 14c0 3.309 2.691 6 6 6 1.294 0 2.49-.416 3.471-1.115L8.02 17.434A3.971 3.971 0 0 1 6 18Z"
                fill="#fff"
              ></path>
            </svg>{" "}
            Vagas para PCD
          </button>
          <button type="button" class="btn btn-secondary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.667 14.768a1.66 1.66 0 0 0 .833-1.435V4.167c0-.92-.747-1.667-1.667-1.667H4.167c-.92 0-1.667.748-1.667 1.667v9.166c0 .614.338 1.146.833 1.435V15H1.667v1.667h16.666V15h-1.666v-.232Zm-12.5-1.435V4.167h11.666l.002 9.166H4.167Z"
                fill="#fff"
              ></path>
            </svg>{" "}
            Vagas de tecnologia
          </button>
          <button type="button" class="btn btn-secondary">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7 13.337s2.635-2.618 3.53-3.54c2.829-2.764 1.419-8.46 1.419-8.46s-5.668-1.41-8.433 1.42a172.301 172.301 0 0 0-3.557 3.557S2.119 5.577 0 7.696l11.29 11.318c2.12-2.148 1.41-5.677 1.41-5.677Zm-1.383-8.295a1.843 1.843 0 1 1 2.608 2.606 1.843 1.843 0 0 1-2.608-2.606ZM.922 18.092A7.197 7.197 0 0 0 5.53 16.25l-2.765-2.765C.922 14.406.922 18.092.922 18.092Z"
                fill="#fff"
              ></path>
            </svg>{" "}
            Estágio e Trainee
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
