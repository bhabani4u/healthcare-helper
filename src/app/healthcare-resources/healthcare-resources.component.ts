import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-healthcare-resources',
  templateUrl: './healthcare-resources.component.html',
  styleUrl: './healthcare-resources.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HealthcareResourcesComponent {
  resources = [
    {
      title: 'Resource Library',
      link: '/resources/resource-library',
      description: 'Learn tips and strategies for understanding and managing your health insurance.'
    },
    {
      title: 'Medicare 101',
      link: '/healthcare-resources/training-events-videos-webinars',
      description: "A beginner's guide to understanding Medicare, its parts, and how it works."
    },
    {
      title: 'Understanding the Role of the Agent',
      link: '/healthcare-resources/medical-terms',
      description: 'Find out how insurance agents can assist you in making informed decisions.'
    },
    {
      title: 'Healthcare Terms',
      link: '/healthcare-resources/healthcare-terms',
      description: 'Basic Healthcare Terms.'
    },
    {
      title: 'Life Insurance Terms',
      link: '/healthcare-resources/life-insurance-terms',
      description: 'Access support and information for caregivers looking after loved ones.'
    },
    {
      title: 'Resources for the Homeless',
      link: '/healthcare-resources/resources-for-the-homeless',
      description: 'Find healthcare resources and support services available for the homeless.'
    },
    {
      title: 'Social Security',
      link: '/healthcare-resources/social-security',
      description: 'Understand the benefits and how to navigate Social Security for your retirement.'
    },
    {
      title: 'Events & Webinars',
      link: '/healthcare-resources/events-webinars',
      description: 'Stay updated with our upcoming events and educational webinars.'
    },
    {
      title: 'Health & Wellness Resources',
      link: '/healthcare-resources/health-wellness-resources',
      description: 'Explore resources to maintain and improve your overall health and wellness.'
    },
    {
      title: 'Medical Terms Glossary',
      link: '/healthcare-resources/medical-terms-glossary',
      description: 'Look up definitions for common medical terms and jargon.'
    },
    {
      title: 'Medicare Calculators',
      link: '/healthcare-resources/medicare-calculators',
      description: 'Use our calculators to estimate your Medicare benefits and costs.'
    }
  ];
}
