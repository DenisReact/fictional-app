function Header() {
  return (
    <header className="bg-customBlue text-white p-2">
      <nav aria-label="Main Navigation" className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Fictional App</div>
        <ul className="flex gap-4">
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
        </ul>
        <button className="bg-white text-customBlue px-4 py-1 rounded hover:bg-gray-200">Get Started</button>
      </nav>
    </header>
  );
}

export default Header;
