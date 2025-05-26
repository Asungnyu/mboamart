const Footer = () => {
  return (
    <footer className="bg-[#F2F8F4] text-[#0B081D] text-center py-6 px-4 sm:px-6 font-sans text-sm sm:text-base border-t border-[#E1EFE6]">
      <p className="mb-2">&copy; 2025 Mboamart. All rights reserved.</p>
      <nav className="flex justify-center gap-4 sm:gap-6 text-[#646C6F]">
        <a
          href="#about"
          className="hover:text-[#AEB7B3] transition-colors duration-200"
        >
          About
        </a>
        <span className="text-[#C8D3CD]">|</span>
        <a
          href="#contact"
          className="hover:text-[#AEB7B3] transition-colors duration-200"
        >
          Contact
        </a>
        <span className="text-[#C8D3CD]">|</span>
        <a
          href="#privacy"
          className="hover:text-[#AEB7B3] transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
