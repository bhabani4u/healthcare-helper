import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-groups',
  templateUrl: './medical-groups.component.html',
  styleUrl: './medical-groups.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MedicalGroupsComponent implements OnInit {
  showAgentKnowledgeSection = false;
  showUtilizeAgentSection = false;
  showNewsSection = false;

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
      this.showAgentKnowledgeSection = true;
    }
    if (numbers & 2) {
      this.showUtilizeAgentSection = true;
    }
    if (numbers & 4) {
      this.showNewsSection = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showAgentKnowledgeSection = false;
    this.showUtilizeAgentSection = false;
    this.showNewsSection = false;
  }

  showAgentKnowledge(event: Event) {
    this.resetAllSections(event);
    this.showAgentKnowledgeSection = true;
  }

  showUtilizeAgent(event: Event) {
    this.resetAllSections(event);
    this.showUtilizeAgentSection = true;
  }

  showNews(event: Event) {
    this.resetAllSections(event);
    this.showNewsSection = true;
  }
}
