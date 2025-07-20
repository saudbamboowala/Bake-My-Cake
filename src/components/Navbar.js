import React from "react";

const Navbar = ({ setSelectedCategory }) => {
  return (
    <nav className="navbar">
      <h1>Bake My Cake</h1>
      <ul>
        <li onClick={() => setSelectedCategory("All")}>All</li>
        <li onClick={() => setSelectedCategory("Cakes")}>Cakes</li>
        <li onClick={() => setSelectedCategory("Cupcakes")}>Cupcakes</li>
        <li onClick={() => setSelectedCategory("Brownies")}>Brownies</li>
      </ul>
    </nav>
  );
};

export default Navbar;
