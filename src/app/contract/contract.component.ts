import {Component, Input, OnInit} from '@angular/core';
import {ContractService} from '../contract.service';
import {Contract} from '../contract/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[];

  @Input() contract: Contract;
  @Input() newContract: Contract;

  ngOnInit() {
    this.getContracts();
    this.contract = new Contract();
    this.newContract = new Contract();
  }

  constructor(
    private contractService: ContractService
  ) {}

  setContract(contract: Contract) {
    this.contract = contract;
  }

  getContracts(): void {
    this.contractService.getAllContracts()
      .subscribe(contracts => this.contracts = contracts);
  }

}
