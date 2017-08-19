import { Component, OnInit } from '@angular/core';
//we should provide our recipe servcie here so
//all the recipe components will have the access to it
import { RecipeServcie } from './recipe.service';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServcie]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeServcie) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // )
  }

}
