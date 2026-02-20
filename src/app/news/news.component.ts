import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  showLatestUpdatesSection = false;
  showMarketTrendsSection = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const numbers = params['numbers'];
      this.resetSections(); // Reset all sections first
      if (numbers) {
        this.setSectionsByNumber(parseInt(numbers, 10));
      }
    });
  }

  private setSectionsByNumber(numbers: number) {
    if (numbers & 1) {
      this.showLatestUpdatesSection = true;
    }
    if (numbers & 2) {
      this.showMarketTrendsSection = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showLatestUpdatesSection = false;
    this.showMarketTrendsSection = false;
  }

  showLatestUpdates(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showLatestUpdatesSection = true;
  }

  showMarketTrends(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMarketTrendsSection = true;
  }
}
