import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions}	from '@angular/http';
import { Node } from './node';

@Injectable()
export class NodeService {

  constructor(private http: Http) { }

  private _contentNodesUrl = 'app/data.json';

  getContentNodes(parentId: number) {
    console.log('parentId = ' + parentId);
    return this.http.get(this._contentNodesUrl)
      .map(res => <Node[]>res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
