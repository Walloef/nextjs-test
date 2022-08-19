import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileNavigation() {
  const { pathname } = useRouter();
  const w = typeof window !== "undefined";

  return (
    <div className="mobile-menu">
      <style jsx>
        {`
          .mobile-menu {
            position: fixed;
            display: flex;
            justify-content: center;
            background: var(--gmc-brand);
            inset: 0;
            top: 76px;
            z-index: 2;
          }
          @media (min-width: 769px) {
            .mobile-menu {
              display: none;
            }
          }
          ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 60%;
          }

          a {
            display: block;
            margin: 25px 0;
            text-align: center;
            font-weight: bold;
            font-size: 1.6rem;
          }
        `}
      </style>
      <ul>
        <li>
          <Link href="/meny">
            <a className={pathname.startsWith("/meny") ? "active" : null}>
              <span>Meny</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/konserter">
            <a className={pathname === "/konserter" ? "active" : null}>
              <span>Konserter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/klassiska-konserter">
            <a
              className={pathname === "/klassiska-konserter" ? "active" : null}
            >
              <span>Klassiska konserter</span>
            </a>
          </Link>
        </li>
        {w && location.pathname === "/" ? (
          <li className="desktop-menu">
            <Link href="/english">
              <a>
                <span>English</span>
              </a>
            </Link>
          </li>
        ) : (
          <li className="desktop-menu">
            <Link href="/">
              <a>
                <span>Svenska</span>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
