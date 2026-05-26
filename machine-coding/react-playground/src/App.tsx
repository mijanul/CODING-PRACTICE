import { lazy, Suspense } from "react";

import "./loader.css";
function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
}

const RecipeFilterApp = lazy(
  () => import("./problems/filter-recipe/attempt-1/FilterRecipeApp"),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RecipeFilterApp />
    </Suspense>
  );
}

export default App;
