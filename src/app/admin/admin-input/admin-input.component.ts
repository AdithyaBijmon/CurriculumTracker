import { Component ,Inject,inject,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-input',
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.css']
})
export class AdminInputComponent  implements OnInit{
  curriculumForm : FormGroup;
  area: string[] = [
    'FSD',
    'ML-AI',
    'DSA',
    'RPA',
    'ST',
    'CSA'
  ];
  category :string[]= [
    'Retail',
    'Academic',
    'Coporate',
    'Govt'
  ];
  
  constructor(private _fb:FormBuilder,
    private curService:CurriculumService,
    private dialogRef:DialogRef<AdminInputComponent>,
    @Inject(MAT_DIALOG_DATA ) public data:any)
    {
    this.curriculumForm = this._fb.group({
      requirement:'',
      area:'',
      category:'',
      institution:'',
      hours:''
    })
  }
  
ngOnInit(): void {
  this.curriculumForm.patchValue(this.data);
}

  onFormSubmit(){
    if(this.curriculumForm.valid){
      if(this.data){
        this.curService.updateCurriculum(this.data.id,this.curriculumForm.value).subscribe({
          next :(val:any) => {
           alert('Curriculum updated');
           this.ngOnInit();
           this.dialogRef.close();
          
           
           
          },
          error:(err) => {
            console.error(err);
          }
        })
      }else{
        this.curService.addCurriculum(this.curriculumForm.value).subscribe({
          next :(val:any) => {
           alert('Curriculum added successfully');
           this.ngOnInit();
           this.dialogRef.close();
           
           
          },
          error:(err) => {
            console.error(err);
          }
        })
      }
  
    }
  }
}
   
  // formdata : Curriculum = {
  //   id : 0,
  //   requirement:'',
  //   area:'',
  //   institution:'',
  //   category:'',
  //   hours:0
  // }
  //  create(){
  //   this.curriculumService.add(this.formdata).subscribe({
  //     next :(data)=> {
  //       alert('Curriculum added successfully')
  //       this.dialogRef.close();
  //     },
  //     error:(er) => {
  //       console.log(er)
  //     }
  //   })
  //  }
  

