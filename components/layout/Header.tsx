import Link from "next/link";
import { studio } from "@/config/studio";
import { MobileNav } from "@/components/navigation/MobileNav";
const links = [
  ["Method", "/method"],
  ["Classes", "/classes"],
  ["Schedule", "/schedule"],
  ["Instructors", "/instructors"],
  ["Memberships", "/memberships"],
  ["First Session", "/first-session"],
];
export function Header() {
  return (
    <>
      <div className="announcement">{studio.announcement}</div>
      <header className="header">
        <div className="container header-inner">
          <Link
            className="wordmark"
            href="/"
            aria-label={`${studio.name} home`}
          >
            {studio.shortName}
          </Link>
          <nav className="desktop-nav" aria-label="Primary">
            {links.map(([n, h]) => (
              <Link className="nav-link" key={h} href={h}>
                {n}
              </Link>
            ))}
            <Link className="btn" href="/book">
              Book a session
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>
    </>
  );
}
