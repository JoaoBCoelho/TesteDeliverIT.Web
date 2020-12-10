import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Conta } from 'src/app/models/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})

export class ContaFormComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    valorOriginal: new FormControl('', Validators.required),
    dataVencimento: new FormControl('', Validators.required),
    dataPagamento: new FormControl('', Validators.required),
  });

  constructor(
    public contaService: ContaService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.contaService.post(new Conta(this.profileForm.value)).subscribe(
      data => {
        this.profileForm.reset();
      },
      error => {
            console.error(error);
        });
  }

}
