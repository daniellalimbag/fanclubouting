import React from "react";
import { IoDocumentText } from "react-icons/io5";

const Header = () => (
  <nav style={{ background: 'var(--color-background)', borderBottom: '2px solid var(--color-secondary)' }} className="w-full py-4 px-6 mb-8 flex flex-col sm:flex-row items-center justify-between shadow gap-2 sm:gap-0">
    <span style={{ color: 'var(--color-accent)' }} className="text-xl sm:text-2xl font-bold">Fanclub Outing</span>
    <a
      href="https://docs.google.com/document/d/1HAK_02LDr04P7JLOrIxqxE40W3aGaZsCHoQQPOQsAFM/edit?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors text-base sm:text-xl"
      title="Open Docs"
    >
      <IoDocumentText size={24} />
      <span className="hidden sm:inline">Docs</span>
    </a>
  </nav>
);

export default Header; 