import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'Een lekkere schnitzel, pittig gekruid.',
            'https://www.fodmaprecept.nl/wp-content/uploads/2016/10/2015-10-20-18.31.12.jpg',
            [
                new Ingredient('Wiener Schnitzel', 1),
                new Ingredient('Peterselie', 1),
                new Ingredient('Citroen', 1),
                new Ingredient('Frietjes', 30),
            ]),
        new Recipe(
            'Big Kahuna Burger',
            'Een lekker sappige burger!',
            'https://dreamdinners.com/theme/dreamdinners/images/recipe/default/512.jpg',
            [
                new Ingredient('Burger (Rundvlees)', 1),
                new Ingredient('Hamburger Brood', 1),
                new Ingredient('Chedar Kaas', 1),
                new Ingredient('Tomaat', 1),
            ]),
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // Use slice to return a copy of the array in this service.
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }


}
