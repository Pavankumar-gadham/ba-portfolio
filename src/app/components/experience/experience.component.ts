import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Associate – O2C Business Operations Analyst',
      company: 'WNS Global Services Pvt. Ltd.',
      period: 'Feb 2023 - Mar 2026',
      description: [
        "• Managed end-to-end Order-to-Cash (O2C) cash application processes by analyzing incoming customer payments and accurately posting receipts to invoices in SAP Accounts Receivable.",
        "• Processed and reconciled 30+ customer payments daily through SAP lockbox processing while maintaining high accuracy and ensuring proper financial record alignment.",
        "• Reviewed and analyzed remittance advice from bank portals to validate invoice references and match incoming payments with open receivables.",
        "• Investigated unapplied or unidentified payments by performing payment analysis and coordinating with collections and accounts receivable teams.",
        "• Collaborated with collections teams to identify payment discrepancies, analyze short payments, and support resolution of customer account issues.",
        "• Handled payment scenarios such as partial payments, short payments, residual items, and overpayments while ensuring accurate reconciliation.",
        "• Performed reconciliation analysis between SAP AR records and bank remittance data to maintain data integrity and financial accuracy.",
      ]
    }
  ];
}