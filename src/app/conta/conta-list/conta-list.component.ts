import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/models/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {

  public contas: Conta[];

  constructor(
    public contaService: ContaService) { }

  ngOnInit(): void {
    this.contaService.get().subscribe(
      data => {
        this.contas = data;
      }
    );
  }
  

  formatDate(input: string): string {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(0), 
      month = datePart[1], day = datePart[2];
  
    return day + '/' + month + '/' + year;
  }
}
