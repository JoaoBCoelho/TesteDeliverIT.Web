import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})

export class ContaFormComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    valorOriginal: new FormControl('', Validators.required),
    dataVencimento: new FormControl('', Validators.required),
    dataPagamento: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }

}
