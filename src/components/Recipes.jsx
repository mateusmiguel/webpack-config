import { useState } from "react";

const elvenshieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refineMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenshieldRecipe,
  leather: 1,
  refineMoonstone: 2,
};

console.log(elvenshieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenshieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gaunlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
