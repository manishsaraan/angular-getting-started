import { Recipe } from './recipe.model';
import { EventEmitter } from 'events';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://via.placeholder.com/150'),
        new Recipe('Another Recipe', 'This is a test', 'https://via.placeholder.com/150'),
    ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}
