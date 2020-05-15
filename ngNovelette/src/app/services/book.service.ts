import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";

  constructor(private http: HttpClient) { }
  
  getBooks(): Observable<Book[]>{
    return this.http.get<IBooks>(this.baseUrl).pipe(
      map(Response => Response._embedded.books)
    );
  }
    
}

interface IBooks{
  _embedded: {
    books: Book[];
  }
}