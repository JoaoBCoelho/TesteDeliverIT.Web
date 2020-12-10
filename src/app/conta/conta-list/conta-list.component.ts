import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {

  contas = [
    {
      "id": "b35e7e5b-cadf-49af-82d2-e3fb9c9004b6",
      "nome": "debito",
      "valorOriginal": 100.0,
      "valorCorrigido": 100.0,
      "dataVencimento": "2020-12-10T00:42:04.049851",
      "dataPagamento": "2020-12-10T00:42:14.85852",
      "qtdDiasAtraso": 0
    },
    {
      "id": "c2c39d52-2917-46e1-8692-24be5e3bc396",
      "nome": "debito",
      "valorOriginal": 100.0,
      "valorCorrigido": 100.0,
      "dataVencimento": "2020-12-10T00:42:04.049851",
      "dataPagamento": "2020-12-10T00:42:14.049851",
      "qtdDiasAtraso": 0
    },
    {
      "id": "9404993b-a662-4a0f-ae37-aceeb49e025d",
      "nome": "debito",
      "valorOriginal": 100.0,
      "valorCorrigido": 104.000,
      "dataVencimento": "2020-12-10T00:00:00",
      "dataPagamento": "2020-12-15T00:00:00",
      "qtdDiasAtraso": 5
    },
    {
      "id": "eb5fe25a-5f3d-41c9-8a4f-7ae33eaea814",
      "nome": "debito",
      "valorOriginal": 100.0,
      "valorCorrigido": 103.8000,
      "dataVencimento": "2020-12-10T00:00:00",
      "dataPagamento": "2020-12-14T00:00:00",
      "qtdDiasAtraso": 4
    },
    {
      "id": "8512fb62-8684-40a2-a859-37aaa0826aa3",
      "nome": "debito",
      "valorOriginal": 100.0,
      "valorCorrigido": 110.7000,
      "dataVencimento": "2040-12-10T00:00:00",
      "dataPagamento": "1234-12-29T00:00:00",
      "qtdDiasAtraso": 19
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  formatDate(input: string): string {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(0), // get only two digits
      month = datePart[1], day = datePart[2];
  
    return day + '/' + month + '/' + year;
  }
}
