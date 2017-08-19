import { Recipe } from './recipe.model';

import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter,Injectable } from '@angular/core';

import {shoppingListSevice} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeServcie {
  //  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        //{
        //     name: 'recipie1',
        //     description: 'recipie description',
        //     imagePath: 'http://picturetherecipe.com/wp-content/uploads/2014/11/Falafel-Pita-with-Tahini-Sauce1-190x190.jpg'
        //   },
        new Recipe('Test',
            'Test description',
            'http://picturetherecipe.com/wp-content/uploads/2014/11/Falafel-Pita-with-Tahini-Sauce1-190x190.jpg'
            , [
                new Ingredient('meat', 3),
                new Ingredient('bread', 5)
            ]
        ),
          new Recipe('Testerhr',
            'Test descriptiondfhfd',
            'http://picturetherecipe.com/wp-content/uploads/2014/11/Falafel-Pita-with-Tahini-Sauce1-190x190.jpg'
            , [
                new Ingredient('meat2', 3),
                new Ingredient('bread5', 5)
            ]
        )
    ]
    constructor(private slService:shoppingListSevice){}

    getRecipes() {
        //slice return a cope of recipe list
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes.slice()[id];
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}