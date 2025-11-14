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
  monthlyIncome = 0;
  monthlyRent = 0;
  carPayment = 0;
  creditCardPayment = 0;
  otherPayments = 0;

  dti = signal<number | null>(null);
  message = signal<string>('');

  calculateDebtToIncomeRatio(): void {
    const income = Number(this.monthlyIncome) || 0;
    const totalDebts =
      Number(this.monthlyRent) +
      Number(this.carPayment) +
      Number(this.creditCardPayment) +
      Number(this.otherPayments);

    if (income <= 0) {
      this.dti.set(null);
      this.message.set('Please enter monthly income greater than 0');
      return;
    }

    const ratio = (totalDebts / income) * 100;
    this.dti.set(Number(ratio.toFixed(2)));
    this.message.set('Calculated successfully');
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
