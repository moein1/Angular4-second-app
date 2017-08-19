import { Component, OnInit,Input,EventEmitter ,Output} from '@angular/core';

import {Recipe} from '../../recipe.model';

import {RecipeServcie} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()  recipe : Recipe;
@Input() index:number;
// @Output() recipeSelected =new EventEmitter<void>();
//First aproach without routing
// onSelected(){
// //this.recipeSelected.emit();
// //We can emit the recipe and subscripe in destination
// this.recipeService.recipeSelected.emit(this.recipe);
// }
  constructor(private recipeService:RecipeServcie) { }

  ngOnInit() {
  }

}
