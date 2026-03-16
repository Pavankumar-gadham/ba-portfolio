import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Associate – O2C Cash Application',
      company: 'WNS Global Services Pvt. Ltd.',
      period: 'Feb 2023 - Mar 2026',
      description: [
        "• Managed end-to-end Order-to-Cash (O2C) cash application activities by posting customer payments to invoices in SAP Accounts Receivable.",
        "• Processed and reconciled 30+ customer payments daily through SAP lockbox processing while maintaining high accuracy.",
        "• Retrieved remittance advice from bank portals and validated payment references to match incoming funds with open invoices.",
        "• Applied check payments and electronic transfers by verifying lockbox numbers, deposit dates, invoice references, and payment amounts.",
        "• Investigated unapplied or unidentified payments by reviewing remittance documentation and coordinating with collections teams.",
        "• Resolved payment discrepancies through communication with internal stakeholders via email and calls.",
        "• Managed payment scenarios including partial payments, short payments, residual payments, and overpayments.",
        "• Supported reconciliation activities by validating invoice values and transaction details between SAP records and bank remittance data."
      ]
    }
  ];
}