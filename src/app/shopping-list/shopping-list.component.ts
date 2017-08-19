import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListSevice } from '../shopping-list/shopping-list.service';

import {Subscription} from 'rxjs/Subscription';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Banana', 6)
  // ]
  private subscription:Subscription;
  ingredients: Ingredient[];
  constructor(private slService: shoppingListSevice) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    //this we help us to be aware when the new ingrient add to the list
  this.subscription=  this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  // onIngrientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
