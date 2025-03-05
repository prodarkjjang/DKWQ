document.addEventListener("DOMContentLoaded", function () {
  const dropZones = document.querySelectorAll(".drop-zone");

  // Make tiles draggable using GSAP Draggable
  function makeDraggable(tile) {
      Draggable.create(tile, {
          type: "x,y",
          bounds: document.body, 
          zIndexBoost: true,
          onDragEnd: function () {
              let droppedZone = getDropZone(this.target);

              if (droppedZone) {
                  droppedZone.appendChild(this.target);
                  resetTilePosition(this.target);
              } else {
                  returnTileToOrigin(this.target);
              }
          }
      });
  }

  // Returns the drop zone under the tile
  function getDropZone(tile) {
      for (let zone of dropZones) {
          let rect = zone.getBoundingClientRect();
          let tileRect = tile.getBoundingClientRect();

          if (
              tileRect.left > rect.left &&
              tileRect.right < rect.right &&
              tileRect.top > rect.top &&
              tileRect.bottom < rect.bottom
          ) {
              return zone;
          }
      }
      return null;
  }

  // Resets the tile position inside the drop zone
  function resetTilePosition(tile) {
      gsap.set(tile, { clearProps: "all" }); // Clears absolute positioning
  }

  // Returns the tile to the original div if not dropped in a valid zone
  function returnTileToOrigin(tile) {
      let sourceZone = document.getElementById("source-zone");
      sourceZone.appendChild(tile);
      resetTilePosition(tile);
  }

  // Make all initial tiles draggable
  document.querySelectorAll(".tile").forEach(makeDraggable);
});
