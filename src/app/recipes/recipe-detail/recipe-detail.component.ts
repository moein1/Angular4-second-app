import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServcie } from '../recipe.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input()
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeServcie,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //this is not a good idea because it can catch th
    //id first that you want to open the item if 
    //you select another item in can not recognize that
    //so we should use subscribe
    var id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        //+ can cast the string to integer
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this is complex alternative way going to up from current path
    //and the add id and edit to the /recipe path just for showing how relative path wotk
   // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

}
