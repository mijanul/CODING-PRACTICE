import { useEffect, useState, type CSSProperties } from "react";
import recipesData from "./recipesData";
import "./styles.css";

const RecipeFilterApp = () => {
  const [filteredData, setFilteredData] = useState(recipesData);
  const ratings = [4.0, 4.3, 4.5, 4.7, 4.9];
  const [selectedRating, setSelectedRating] = useState(ratings[0]);
  const [cartCount, setCartCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const filteredRecipes = recipesData.filter(
      (recipe) => recipe.rating >= selectedRating,
    );
    setFilteredData(filteredRecipes);
    const avgRate =
      filteredRecipes.reduce((acc, curr) => acc + curr.rating, 0) /
      filteredRecipes.length;
    setAvgRating(avgRate);
  }, [selectedRating]);

  const updateCartCount = () => {
    setCartCount((prev) => prev + 1);
  };

  const styles: Record<string, CSSProperties> = {
    container: {
      padding: "10px",
    },
    rowStyle: {
      flexDirection: "row",
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    middleText: {
      textAlign: "center",
    },
    viewDiv: {
      width: "90%",
      margin: "0 auto",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    },
    card: {
      width: "220px",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      textAlign: "center",
      height: "270px",
    },
    imageStyle: {
      height: "100px",
      width: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.middleText}>🍽️ Recipe Explorer</h1>
      <div style={styles.rowStyle}>
        <div>
          Filter by Rating{" "}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(Number(e.target.value))}
          >
            {ratings.map((rating) => (
              <option key={rating} value={rating}>
                {rating.toFixed(1)} +
              </option>
            ))}
          </select>
        </div>
        <div>Cart Items: {cartCount}</div>
      </div>
      <div>
        <h2 style={styles.middleText}>
          Average Rating: {avgRating.toFixed(2)} ({filteredData.length} recipes)
        </h2>
      </div>
      <div style={styles.viewDiv}>
        {filteredData.map((item, index) => {
          return (
            <div key={index} style={styles.card}>
              <img src={item.image} style={styles.imageStyle} />
              <h3>{item.name}</h3>
              <p>Cuisine: {item.cuisine}</p>
              <p>
                Rating: {item.rating} ({item.reviewCount} ratings)
              </p>
              <button onClick={updateCartCount}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
