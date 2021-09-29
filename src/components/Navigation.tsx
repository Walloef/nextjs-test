import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function Navigation() {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      {active && <MobileNavigation />}
      <div className={"container " + (active ? "active-container" : "")}>
        <ul>
          <Burger active={active} onClick={() => setActive(!active)} />
          <li>
            <Link href="/">
              <a>
                <span className="name">Glenn Miller café</span>
              </a>
            </Link>
          </li>
          <li className="spacer"></li>
          <li className="desktop-menu">
            <Link href="/meny">
              <a className={pathname.startsWith("/meny") ? "active" : null}>
                <span>Meny</span>
              </a>
            </Link>
          </li>
          <li className="desktop-menu">
            <Link href="/konserter">
              <a className={pathname === "/konserter" ? "active" : null}>
                <span>Konserter</span>
              </a>
            </Link>
          </li>
          <li className="desktop-menu">
            <Link href="/klassiska-konserter">
              <a
                className={
                  pathname === "/klassiska-konserter" ? "active" : null
                }
              >
                <span>Klassiska konserter</span>
              </a>
            </Link>
          </li>
        </ul>

        <style jsx>
          {`
            .desktop-menu {
              display: none;
            }
            a {
              font-weight: bold;
              font-size: 0.9rem;
            }

            @media (min-width: 769px) {
              .desktop-menu {
                display: inherit;
              }
            }
            .mobile-menu {
              position: absolute;
              inset: 0;
              background: red;
            }
            .name {
              font-family: "Marck Script", cursive;
              font-size: 2rem;
              font-weight: bold;
              color: var(--gmc-white);
            }
            @media (max-width: 370px) {
              .name {
                font-size: 1.5rem;
              }
            }
            .container {
              position: fixed;
              top: 0;
              width: 100%;
              height: 36px;
              padding: 20px 0;
              backdrop-filter: blur(9px);
              background: hsl(240deg 39% 15% / 55%);
              box-shadow: 0 2px 7px var(--gmc-brand-dark);
              z-index: 1;
            }
            .active-container {
              backdrop-filter: blur(0);
              background: var(--gmc-brand);
            }
            @-moz-document url-prefix() {
              .container {
                background: var(--gmc-brand);
              }
            }
            ul {
              list-style: none;
              padding: 0 24px;
              display: flex;
              max-width: 1200px;
              margin: 0 auto;
            }
            li {
              padding: 0 12px;
              display: flex;
              align-items: center;
            }
            .spacer {
              flex-grow: 1;
            }
          `}
        </style>
        {/* <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: var(--gmc-white);
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: var(--gmc-black);
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style> */}
      </div>
    </>
  );
}
