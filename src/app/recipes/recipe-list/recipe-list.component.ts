import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test Recipe", "Simple recipe", "https://i.pinimg.com/originals/56/c5/66/56c5667ef94e424b876f0ac6ff910b3e.jpg"),
    new Recipe("A test Recipe", "Simple recipe", "https://i.pinimg.com/originals/56/c5/66/56c5667ef94e424b876f0ac6ff910b3e.jpg")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
