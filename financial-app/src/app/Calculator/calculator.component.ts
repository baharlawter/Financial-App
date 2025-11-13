import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  // model bound to form inputs
  monthlyIncome = 0;
  monthlyRent = 0;
  carPayment = 0;
  creditCardPayment = 0;
  otherPayments = 0;

  // signal to hold the result and optional message
  dti = signal<number | null>(null);
  message = signal<string>('');

  // calculate and store result
  calculateDebtToIncomeRatio(): void {
    const totalDebts =
      Number(this.monthlyRent) +
      Number(this.carPayment) +
      Number(this.creditCardPayment) +
      Number(this.otherPayments);

    if (!this.monthlyIncome || this.monthlyIncome <= 0) {
      this.dti.set(null);
      this.message.set('Please enter a valid gross monthly income greater than 0.');
      return;
    }
    if (totalDebts < 0) {
      this.dti.set(null);
      this.message.set('Debt cannot be negative');
    }

    const ratio = (totalDebts / Number(this.monthlyIncome)) * 100;
    const rounded = Math.round(ratio * 100) / 100; // two decimals
    this.dti.set(rounded);
    this.message.set(
      rounded <= 36
        ? 'DTI looks healthy (common recommended threshold is <= 36%).'
        : 'DTI is high — consider reducing debts or increasing income.'
    );
  }

  clear(): void {
    this.monthlyIncome = 0;
    this.monthlyRent = 0;
    this.carPayment = 0;
    this.creditCardPayment = 0;
    this.otherPayments = 0;
    this.dti.set(null);
    this.message.set('');
  }
}
