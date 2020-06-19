import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewsPage } from './reviews.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReviewsPageRoutingModule } from './reviews-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReviewsPageRoutingModule
  ],
  declarations: [ReviewsPage]
})
export class ReviewsPageModule {}
