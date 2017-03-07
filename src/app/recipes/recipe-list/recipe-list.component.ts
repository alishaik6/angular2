import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe} from '../recipe';
import {Ingredient} from '../../shared/ingredient'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] =[
    new Recipe('Chicken curry', 'Very tasty', 'http://studenthealth.uiowa.edu/sites/default/files/uploads/Main%20Dish%20Recipes_0.JPG', new Ingredient('ingredient 1', 100)),
  new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', new Ingredient('ingredient 2', 500))
];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe)
  {
    this.selectedRecipe.emit(recipe);
  }

}
