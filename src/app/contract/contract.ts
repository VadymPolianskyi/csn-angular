import {Employee} from '../employee/employee';
import {CoffeeHouse} from '../coffee-house/coffeeHouse';

export class Contract {
  contractNumber: number;
  workPosition: string;
  startDate: number;
  endDate: number;
  employee: Employee;
  coffeeHouse: CoffeeHouse;
  salary: number;
  vacation: number;
}

export class Position {
  name: string;
  avgSalary: number;
  priority: number;
  description: string;
}
