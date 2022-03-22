function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light mb-2">
      <h1 className="navbar-brand text-muted">
        {new Date().toLocaleDateString("tr-TR")}
      </h1>
    </nav>
  );
}

export default Nav;
