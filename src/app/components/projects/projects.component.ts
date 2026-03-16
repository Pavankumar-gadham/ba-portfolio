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
      name: 'SAP Lockbox Payment Processing',
      description: [
        'Handled lockbox payment processing by retrieving remittance details from bank portals and matching incoming customer payments with open invoices in SAP.',
        'Validated payment references, invoice numbers, and deposit details to ensure accurate payment posting and minimize unapplied cash.'
      ],
      tech: ['SAP Accounts Receivable', 'Lockbox Processing', 'Payment Posting', 'Bank Portals', 'Microsoft Excel'],
      image: 'assets/images/o2c.png',
      liveLink: '',
      codeLink: ''
    },

    {
      name: 'Unapplied Cash Investigation & Resolution',
      description: [
        'Investigated unapplied and unidentified payments by reviewing remittance advice and customer payment references.',
        'Collaborated with collections teams and internal stakeholders to resolve discrepancies and ensure accurate allocation of payments to invoices.'
      ],
      tech: ['SAP O2C', 'Cash Application', 'Remittance Analysis', 'Customer Account Reconciliation', 'Stakeholder Communication'],
      image: 'assets/images/o2c1.webp',
      liveLink: '',
      codeLink: ''
    },

    {
      name: 'Customer Payment Reconciliation Process',
      description: [
        'Performed reconciliation between bank remittance data and SAP Accounts Receivable records to verify invoice values and payment transactions.',
        'Managed scenarios such as partial payments, short payments, residual payments, and overpayments while maintaining accurate customer balances.'
      ],
      tech: ['SAP AR', 'Payment Reconciliation', 'Financial Data Validation', 'Excel (Pivot Tables, VLOOKUP)', 'O2C Process'],
      image: 'assets/images/o2c2.jpg',
      liveLink: '',
      codeLink: ''
    }

  ];
}