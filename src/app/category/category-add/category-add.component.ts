import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {


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

  agregarCategoria() {
    if (this.fieldFormControl.valid) {
      console.log('Formulario válido. Se puede enviar.');
      this.router.navigate(['/']);
      this.toastr.success('Categoría Tecnicomecanica se creó exitosamente.', 'Exitoso');
    } else {
      console.log('Formulario inválido. No se puede enviar.');
    }
  }
  cancelar() {
    this.router.navigate(['/']);
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
