import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeServcie } from '../recipe.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  //first approach using without service
  // recipes: Recipe[] = [{
  //   name: 'recipie1',
  //   description: 'recipie description',
  //   imagePath: 'http://picturetherecipe.com/wp-content/uploads/2014/11/Falafel-Pita-with-Tahini-Sauce1-190x190.jpg'
  // },
  // new Recipe('Test', 'Test description', 'http://picturetherecipe.com/wp-content/uploads/2014/11/Falafel-Pita-with-Tahini-Sauce1-190x190.jpg'
  // )
  // ]
  //second approach using service for recipe list
  //inject to recipe component(in provider property) and use it here
  constructor(private recipeService: RecipeServcie,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //here we can make the access to our recipe
    //recipeServcie.
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // };

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
