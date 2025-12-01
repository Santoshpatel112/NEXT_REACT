import { useAppStore } from "../store/appStore.js";

function Navbar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <nav>
      <span>THeme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={logout}>Logount</button>
        </>
      ) : (
        <span> Guest</span>
      )}
    </nav>
  );
}

export default Navbar;
