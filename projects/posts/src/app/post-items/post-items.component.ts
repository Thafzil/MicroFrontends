import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrl: './post-items.component.css',
})
export class PostItemsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
        console.log(data);
      });
  }
}
