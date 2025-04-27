import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, onRemove }) => {
  return (
    <div style={styles.gallery}>
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemove}
        />
      ))}
      {tours.length === 0 && <h2>No Tours Available</h2>}
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
};

export default Gallery;