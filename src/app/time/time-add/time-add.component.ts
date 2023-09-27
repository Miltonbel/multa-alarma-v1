import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-time-add',
  templateUrl: './time-add.component.html',
  styleUrls: ['./time-add.component.scss']
})
export class TimeAddComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    public fb: FormBuilder, private router: Router,private toastr: ToastrService
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]],
      url: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit() { }
  saveData() {
    console.log(this.myForm.value);
  }
  fieldFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  agregarTiempo() {
    if (this.fieldFormControl.valid) {
      console.log('Formulario válido. Se puede enviar.');
      this.router.navigate(['/time']);
      this.toastr.success('Tiempo 1 hora antes se creó exitosamente.', 'Exitoso');
    } else {
      console.log('Formulario inválido. No se puede enviar.');
    }
  }
  cancelar() {
    this.router.navigate(['/time']);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
