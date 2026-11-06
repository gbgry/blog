function Navbar() {
  return (
    <>
      <nav className="flex  justify-between items-center px-10 py-5 ">
        <div>
          <a href="/" className="text-2xl font-bold">
            Ink and ideas
          </a>
        </div>
        <div className="flex gap-8">
          <a href="/">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
