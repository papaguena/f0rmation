import { Component } from '@angular/core';
import { File } from '../model/file';
import { Category } from '../model/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  title = 'testeuhhhhhhhhhhhhhhhhhh';
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {
          id: 2,
          name: 'child1'
        },
        {
          id: 3,
          name: 'child2'
        }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {
          id: 5,
          name: 'child2.1'
        },
        {
          id: 6,
          name: 'child2.2',
          children: [
            {
              id: 7,
              name: 'subsub'
            }
          ]
        }
      ]
    }
  ];
}

