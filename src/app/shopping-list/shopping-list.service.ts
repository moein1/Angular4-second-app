import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';
export class shoppingListSevice {
    //ingredientsChanged=new EventEmitter<Ingredient[]>();
    ingredientsChanged=new Subject<Ingredient[]>();
    
  private  ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 6)
    ]

    getIngredients(){
        return this.ingredients.slice();
    }

//this is not working because we add the new ingredient to 
//the orignam list but here we have the slice (copy) of that
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
        
    }

    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
    //    this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
        
    }
}