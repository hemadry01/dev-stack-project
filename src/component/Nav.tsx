import Logo from "../assets/logo-text.png";

export function Nav() {

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src={Logo} alt="Logo" className="w-32 h-auto" />
        <ul className="flex gap-8 text-[14px] font-bold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/technologies">Technologies</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="text-[14px] font-bold">Sign In</button>
          <button className="bg-red-400 text-white text-[14px]  font-bold py-2 px-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

