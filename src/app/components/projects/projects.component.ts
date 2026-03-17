import { Component } from '@angular/core';
import { Project } from 'src/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [

    {
      name: 'O2C Payment Data Analysis & Lockbox Processing',
      description: [
        'Analyzed customer payment data received through lockbox processing by validating remittance details and matching payments with open invoices in SAP.',
        'Identified patterns in unapplied cash and improved payment allocation accuracy through structured data validation and reconciliation.'
      ],
      tech: ['SAP Accounts Receivable', 'Payment Data Analysis', 'Lockbox Processing', 'Microsoft Excel', 'Financial Data Validation'],
      image: 'assets/images/o2c.png',
      liveLink: '',
      codeLink: ''
    },

    {
      name: 'Unapplied Cash & Collections Insight Analysis',
      description: [
        'Performed analysis of unapplied and unidentified payments by reviewing remittance data and customer accounts to identify root causes of mismatches.',
        'Collaborated with collections teams to support dispute identification, short payment analysis, and customer follow-up strategies within the O2C cycle.'
      ],
      tech: ['O2C Process', 'Accounts Receivable Analysis', 'Discrepancy Investigation', 'Collections Workflow Understanding', 'Stakeholder Collaboration'],
      image: 'assets/images/o2c1.webp',
      liveLink: '',
      codeLink: ''
    },

    {
      name: 'Customer Account Reconciliation & Aging Analysis',
      description: [
        'Conducted reconciliation analysis between SAP AR records and bank remittance data to ensure accurate customer account balances.',
        'Analyzed aging data and payment trends to identify overdue invoices, short payments, and potential collection risks within customer accounts.'
      ],
      tech: ['SAP AR', 'Payment Reconciliation', 'Aging Analysis', 'Excel (Pivot Tables, VLOOKUP)', 'Financial Data Analysis'],
      image: 'assets/images/o2c2.jpg',
      liveLink: '',
      codeLink: ''
    }

  ];
}