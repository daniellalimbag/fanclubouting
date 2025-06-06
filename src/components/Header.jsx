import React from "react";
import { IoDocumentText } from "react-icons/io5";

const Header = () => (
  <nav style={{ background: 'var(--color-background)', borderBottom: '2px solid var(--color-secondary)' }} className="w-full py-4 px-6 mb-8 flex items-center justify-between shadow">
    <span style={{ color: 'var(--color-accent)' }} className="text-2xl font-bold">Fanclub Outing</span>
    <a
      href="https://docs.google.com/document/d/1HAK_02LDr04P7JLOrIxqxE40W3aGaZsCHoQQPOQsAFM/edit?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors text-xl"
      title="Open Docs"
    >
      <IoDocumentText size={28} />
      <span className="hidden sm:inline">Docs</span>
    </a>
  </nav>
);

export default Header; 