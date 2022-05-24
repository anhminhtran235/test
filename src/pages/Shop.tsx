export const Shop = () => {
  const handleMouseDown = (event: { button: number }) => {
    if (event.button === 0) {
      // Actions to perform when left mouse button is clicked, like update state
    }
  };
  return (
    <section>
      <div
        className="shop_img"
        onMouseDown={handleMouseDown}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></div>
    </section>
  );
};

export default Shop;
