import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Todo } from './Todo'
const API_URL = environment.apiUrl;

@Injectable()
export class HttpServiceService {

  constructor(private http: Http) { }

  public getAllTodos(): string {
    return "Soumen || Welcome here !!!"
  }
}
