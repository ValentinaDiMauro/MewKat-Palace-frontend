import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsPage } from './reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsPageRoutingModule {}
