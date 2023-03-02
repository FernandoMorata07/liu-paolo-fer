import React, { useContext } from "react";
import { HeaderNoLogin } from "../components/HeaderNoLogin";
import { AuthContext } from "../context/AuthContext";

export function AboutUs() {
  const { token } = useContext(AuthContext);
  return (
    <>
      {!token && <HeaderNoLogin />}
      <section>
        <h2>Los developers:</h2>
        <ul>
          <li>
            <a
              href="https:\\www.linkedin.com/in/fernando-morata-sanchez"
              target="_blank"
              rel="noreferrer"
            >
              Fernando
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/liuemith-sánchez"
              target="_blank"
              rel="noreferrer"
            >
              Liuemith
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/paolo-troni-developer/"
              target="_blank"
              rel="noreferrer"
            >
              Paolo
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
