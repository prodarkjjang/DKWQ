document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".tile");
  const infoBox = document.getElementById("infoBox");
  const resetButton = document.getElementById("resetButton");
  let clickedTiles = []; // List to store first-time clicked tile numbers

  tiles.forEach((tile, index) => {
      tile.setAttribute("data-number", index + 1); // Assign number on page load
  });

  tiles.forEach(tile => {
      tile.addEventListener("click", () => {
          const tileNumber = tile.getAttribute("data-number");

          // If the tile is clicked for the first time, add its number to the list
          if (!clickedTiles.includes(tileNumber)) {
              clickedTiles.push(tileNumber);
              console.log("Clicked tiles:", clickedTiles); // Log updated list
          }

          // Change appearance of the tile
          tile.classList.add("clicked");

          // Update the sticky info box with tile's info
          infoBox.textContent = tile.getAttribute("data-info");
      });
  });

  // Reset button functionality
  resetButton.addEventListener("click", () => {
      clickedTiles = []; // Clear the clicked tiles list
      console.log("Reset clicked. List cleared:", clickedTiles);

      tiles.forEach(tile => {
          tile.classList.remove("clicked"); // Remove the clicked state
      });

      infoBox.textContent = "Click a tile to see details"; // Reset info box
  });
});
