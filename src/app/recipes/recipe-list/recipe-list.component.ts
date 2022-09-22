import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Yummy pasta', 'https://static.toiimg.com/photo/84784534.cms'),
    new Recipe('Pasta', 'Yummy pasta', 'https://static.toiimg.com/photo/84784534.cms'),
    new Recipe('Pasta', 'Yummy pasta', 'https://static.toiimg.com/photo/84784534.cms'),
    new Recipe('Pasta', 'Yummy pasta', 'https://static.toiimg.com/photo/84784534.cms')
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
