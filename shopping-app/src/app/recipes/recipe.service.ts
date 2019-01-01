import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://via.placeholder.com/150'),
        new Recipe('Another Recipe', 'This is a test', 'https://via.placeholder.com/150'),
    ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}
