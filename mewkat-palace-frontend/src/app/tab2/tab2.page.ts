import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Review } from 'src/app/interfaces/review'
import { ReviewsService } from 'src/app/services/reviews/reviews.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  reviews: Review[] = [];

  constructor(
    private reviewsService: ReviewsService,
    public alertController: AlertController
  ) { }

  async ngOnInit() {
    await this.getReviews();
  }

  async writeReviewAlert() {
    const alert = await this.alertController.create({
      cssClass: 'write-review-alert',
      header: 'Invia la tua recensione',
      subHeader: 'Il tuo feedback è importante',
      inputs: [
        {
          name: 'code',
          type: 'text',
          placeholder: 'Codice prenotazione'
        },
        {
          name: 'rating',
          type: 'number',
          placeholder: 'Rating ⭐',
          min: 0,
          max: 5 
        },
        {
          name: 'comment',
          type: 'textarea',
          placeholder: 'Scrivi un commento... (opzionale)'
        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel'
        },{
          text: 'Invia',
          handler: (alertData) => {
            this.sendReview(alertData.comment, alertData.code, alertData.rating);
          }
        }
      ]
    });

    await alert.present();
  }

  async sendReview(text, code, rating) {
    // this.reviewsService.sendReview();
    this.reviews.push({
      _id: "-1",
      text: text,
      author: code,
      rating: rating,
      likes: 0
    });
  }

  async getReviews() {
    this.reviews = await this.reviewsService.getReviews();
  }
}
