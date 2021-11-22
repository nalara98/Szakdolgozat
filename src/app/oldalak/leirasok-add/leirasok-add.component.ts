import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leirasok-add',
  templateUrl: './leirasok-add.component.html',
  styleUrls: ['./leirasok-add.component.scss']
})
export class LeirasokAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    body: new FormControl('')

  });


  constructor(public dialogReferenc: MatDialogRef<LeirasokAddComponent>) { }

  ngOnInit(): void {
  }



  
 
 

}
