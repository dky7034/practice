// components/Recipe/RecipeContainer.jsx
import Recipe from "./Recipe";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const { data } = await axios.get("https://dummyjson.com/recipes");
      // 데이터 확인
      console.log(data);
      setRecipes(data.recipes);
    }
    // 함수 호출
    getRecipes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Recipe 컴포넌트 반복 */}
        {recipes.map((recipes) => {
          return <Recipe key={recipes.id} recipes={recipes}></Recipe>;
        })}
      </div>
    </div>
  );
}
