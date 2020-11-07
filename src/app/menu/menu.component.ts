import { Component, OnInit , Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import {Comment} from '../shared/Comment';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishService } from '../services/dish.service';
import { inject } from '@angular/core/testing';
import { flyInOut, expand } from '../animations/app.animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]

  
  
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMess: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { } 

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes , errmess => this.errMess = <any>errmess);
  }


}
