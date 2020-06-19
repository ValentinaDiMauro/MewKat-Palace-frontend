import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReviewsPage } from './reviews.page';

describe('ReviewsPage', () => {
  let component: ReviewsPage;
  let fixture: ComponentFixture<ReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
