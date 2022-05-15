import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [
    new Recipe("Sushi Buffet", "You can eat whatever you want", "https://properfoodie.com/wp-content/uploads/2020/07/sushi-1-1.jpg"),
    new Recipe("Another Sushi Buffet", "You can eat whatever you want", "https://properfoodie.com/wp-content/uploads/2020/07/sushi-1-1.jpg")
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
