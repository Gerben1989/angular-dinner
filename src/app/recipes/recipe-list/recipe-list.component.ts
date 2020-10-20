import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test description', 'https://i0.wp.com/www.bbq-nl.com/wp-content/uploads/2018/12/easterwoodribs-2.jpg?resize=800%2C533&ssl=1'),
    new Recipe('Test recipe 2', 'Test description 2', 'https://i0.wp.com/www.bbq-nl.com/wp-content/uploads/2018/12/easterwoodribs-2.jpg?resize=800%2C533&ssl=1'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  passSelectedRecipe(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

}
