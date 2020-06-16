import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from 'src/app/interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient,
  ) {}

  async getReviews() {
    return this.http.get<Review[]>(`http://127.0.0.1:3000/reviews`, this.httpOptions).toPromise();
  }

  async sendReview(token, stars, message) {
    // this.reviews.push(review);
    this.http.post<any>(`http://127.0.0.1:3000/reviews`, {
      "token": token,
      "stars": stars,
      "message": message
    }, this.httpOptions).toPromise();
  }
  
  async addLike(reviewId) {
    this.http.post<any>(`http://127.0.0.1:3000/reviews/addLike/` + reviewId, this.httpOptions).toPromise();
  }

  async addDislike(reviewId) {
    this.http.post<any>(`http://127.0.0.1:3000/reviews/addDislike/` + reviewId, this.httpOptions).toPromise();
  }
}