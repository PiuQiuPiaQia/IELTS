import Link from "next/link";
import type { ReactNode } from "react";

type SiteHeaderProps = {
  active: "reviews" | "reference" | "task2" | "task2-materials";
  actions?: ReactNode;
};

export default function SiteHeader({
  active,
  actions,
}: SiteHeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="返回雅思批改作文">
        <div className="brand-mark">W</div>
        <div>
          <div className="brand-title">雅思批改作文</div>
          <div className="brand-subtitle">Local writing review</div>
        </div>
      </Link>

      <nav className="main-nav" aria-label="主导航">
        <Link
          className={active === "reviews" ? "active" : ""}
          href="/"
          aria-current={active === "reviews" ? "page" : undefined}
        >
          作文批改
        </Link>
        <Link
          className={active === "reference" ? "active" : ""}
          href="/reference"
          aria-current={active === "reference" ? "page" : undefined}
        >
          G 类书信参考
        </Link>
        <Link
          className={active === "task2" ? "active" : ""}
          href="/task2"
          aria-current={active === "task2" ? "page" : undefined}
        >
          大作文参考
        </Link>
        <Link
          className={active === "task2-materials" ? "active" : ""}
          href="/task2-materials"
          aria-current={active === "task2-materials" ? "page" : undefined}
        >
          大作文素材
        </Link>
      </nav>

      <div className="top-actions">{actions}</div>
    </header>
  );
}
