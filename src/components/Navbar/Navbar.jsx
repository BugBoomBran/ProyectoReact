import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>TecnoBoom</h1>
        <div>
          <button>Celulares</button>
          <button>Tablets</button>
          <button>Notebooks</button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
