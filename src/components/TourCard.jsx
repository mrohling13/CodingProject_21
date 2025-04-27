import React from "react";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.info}>{info}</p>
        <p style={styles.price}>Price: ${price}</p>
        <button style={styles.button} onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    marginBottom: "16px",
    maxWidth: "400px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  info: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default TourCard;