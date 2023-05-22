import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return [
      {name: "All", count: 6},
      {name: "Food", count: 3},
      {name: "Fastfood", count: 4}
    ]
  }

  getAllFoodsByTag(tag: string):Food[]{
    return tag == "All" ?
      this.getAll() :
        this.getAll().filter(food=>food.tags?.includes(tag));
  } 

  getAll():Food[]{
    return [
      {
        id:1,
        name:'Goulash soup',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['hungary','us'],
        stars:3,
        imageUrl:'/assets/images/foods/food-1.jpg',
        tags: ['Food','Goulash','Soup']
      },
      {
        id:2,
        name:'Pizza',
        price: 6,
        cookTime: '3-7',
        favorite: true,
        origins: ['italy','us'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food-2.jpg',
        tags: ['Fastfood','Pizza']
      },
      {
        id:3,
        name:'Hamburger',
        price: 3,
        cookTime: '15-20',
        favorite: false,
        origins: ['mongolia','america'],
        stars:5,
        imageUrl:'/assets/images/foods/food-3.jpg',
        tags: ['Hamburger','Fastfood']
      },
      {
        id:4,
        name:'Hotdog',
        price: 10,
        cookTime: '5-10',
        favorite: false,
        origins: ['us','canada'],
        stars:3,
        imageUrl:'/assets/images/foods/food-4.jpg',
        tags: ['Fastfood','Hotdog']
      },
      {
        id:5,
        name:'Spaghetti',
        price: 11,
        cookTime: '20-25',
        favorite: true,
        origins: ['italy','croatia'],
        stars:4,
        imageUrl:'/assets/images/foods/food-5.jpg',
        tags: ['Food','Spaghetti','Pasta']
      },
      {
        id:6,
        name:'Salad',
        price: 8,
        cookTime: '10-15',
        favorite: false,
        origins: ['greek','us'],
        stars:2,
        imageUrl:'/assets/images/foods/food-6.jpg',
        tags: ['Fastfood','Salad','Greek','Food']
      }
    ]
  }
}
