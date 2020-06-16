import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

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
    private storage: Storage,
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
          name: 'stars',
          type: 'number',
          placeholder: 'stars ⭐',
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
            this.sendReview(alertData.code, alertData.stars, alertData.comment);
          }
        }
      ]
    });

    await alert.present();
  }

  async sendReview(code, stars, message) {
    this.reviewsService.sendReview(code, stars, message);

    this.getReviews();
  }

  async getReviews() {
    this.reviews = await this.reviewsService.getReviews();
  }

  async addLike(reviewId) {
    this.reviewsService.addLike(reviewId);

    this.saveOpinionedReviewId(reviewId);

    this.getReviews();
  }

  async addDislike(reviewId) {
    this.reviewsService.addDislike(reviewId);

    this.getReviews();
  }

  saveOpinionedReviewId(reviewId) {
    // TODO
  }
}
