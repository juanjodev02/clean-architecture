import { HourReporter } from './HourReporter';
import { EmployeeSaver } from './EmployeeSaver';

/**
  El código se separó porque cada cada clase corresponda a un solo actor
  con lo que se cumple el principio de responsabilidad única.
 */
/**
 * La clase Empleado actúa como una fachada
 */
export class Employee {
  private name: string;
  private salary: number;
  private benefits: number;
  private vacationDays: number;
  private sickDays: number;
  private vacationDaysTaken: number;

  constructor(name: string, salary: number, benefits: number, vacationDays: number, sickDays: number) {
    this.name = name;
    this.salary = salary;
    this.benefits = benefits;
    this.vacationDays = vacationDays;
    this.sickDays = sickDays;
    this.vacationDaysTaken = 0;
  }

  public calculatePay(): void {}

  public reportHours(): void {
    const hourReporter = new HourReporter(1);
    hourReporter.reportHours();
  }

  public save(): void {
    const employeeSaver = new EmployeeSaver();
    employeeSaver.saveEmployee(this);
  }
}