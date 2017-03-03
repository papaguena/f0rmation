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
  categoryList: Category = {
    files
  };
  file: File[] = [{
    id: 1,
    name: 'eee',
    description: 'eee',
    path: 'eee',
    reference: 'rrrr'
  },
  {
    id: 2,
    name: 'eee',
    description: 'eee',
    path: 'eee',
    reference: 'rrrr'
  },
  {
    id: 3,
    name: 'eee',
    description: 'eee',
    path: 'eee',
    reference: 'rrrr'
  },
  {
    id: 4,
    name: 'eee',
    description: 'eee',
    path: 'eee',
    reference: 'rrrr'
  },
  {
    id: 5,
    name: 'eee',
    description: 'eee',
    path: 'eee',
    reference: 'rrrr'
  },
  {
    id: 6,
    name: 'eee',
    description: 'eee',
    path: 'eee',
    reference: 'rrrr'
  }];
}

