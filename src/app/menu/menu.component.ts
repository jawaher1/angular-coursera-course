import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import {Comment} from '../shared/Comment';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

  
  
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  selectedDish: Dish;


 

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;}
}
