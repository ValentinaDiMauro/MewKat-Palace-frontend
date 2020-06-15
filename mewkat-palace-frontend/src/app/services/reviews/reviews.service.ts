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
    // return this.http.get<Review[]>(`API_URL/reviews`).toPromise();

    let reviews: Review[] = [
        {
            _id: "0",
            text: "Test",
            author: "Salvatore Riccobene",
            rating: 4,
            likes: 0
        },{
            _id: "1",
            text: "Test",
            author: "Franco Barbanera",
            rating: 2,
            likes: 10
        }
    ];

    return reviews;
  }

  async sendReview(review: Review) {
    // this.reviews.push(review);
  }

}
