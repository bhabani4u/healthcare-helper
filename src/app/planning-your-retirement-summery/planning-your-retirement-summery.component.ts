import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-planning-your-retirement-summery',
  templateUrl: './planning-your-retirement-summery.component.html',
  styleUrl: './planning-your-retirement-summery.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PlanningYourRetirementSummeryComponent {
  otherHealthcareOptions = [
    {
      title: 'Veteran’s Affairs (VA) Healthcare',
      description: 'For veterans enrolled in the VA Healthcare System, you may not have to enroll in a prescription drug plan through Medicare as the VA provides you with prescription coverage. However, you must expect to get all of your healthcare coverage through the VA if you go this route, and the VA does not cover routine dental and vision.'
    },
    {
      title: 'TRICARE For Life',
      description: 'TRICARE members receive supplemental coverage that works similarly to Medicare Supplement. This means that Original Medicare will cover 80% of your healthcare expenses, and TRICARE For Life will cover the remaining 20% with certain stipulations.'
    },
    {
      title: 'PERS',
      description: 'If you belong to a public union such as PERS, consult with your benefits manager long in advance before your planned retirement age. If your union provides a retirement healthcare plan, you may find their coverage preferable to traditional Medicare.'
    }
  ];
}
