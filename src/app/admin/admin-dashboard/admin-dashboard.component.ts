import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurriculumService } from 'src/app/services/curriculum.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminInputComponent } from '../admin-input/admin-input.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  
  
  
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 
    'requirement', 
    'area',
     'category',
     'institution',
     'hours',
     'action'
    ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

   constructor(private curService:CurriculumService,private _dialog:MatDialog){}

   ngOnInit(): void {
     this.getCurriculumList();
   }

  getCurriculumList(){
    this.curService.getCurriculumList().subscribe({
      next : (res) =>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    
      },
      error : (res) =>{
        console.error(res);
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCurriculum(id:number){
    this.curService.deleteCurriculum(id).subscribe({
      next : (res) => {
        alert('Curriculum deleted successfully')
        this.ngOnInit();
      },
      error(err) {
        console.log(err);
      },
    })
  }
  openEditForm(data:any){
    this._dialog.open(AdminInputComponent,{
      data
    })
  }
  
}










  // allcurriculum: Curriculum[] = [];
  // constructor(private curriculumService:CurriculumService){}
  // ngOnInit():void{
  //   this.curriculumService.getAll().subscribe((data)=>{
  //   this.allcurriculum = data;
  //   this.ngOnInit();
  //   })
  // }
  //   deleteCurriculum(id:number){
  //     this.curriculumService.deleteCurriculum(id).subscribe({      
  //       next : (id) => {
  //        alert("Curriculum deleted successfully")
  //        this.ngOnInit();
  //       },
  //       error:console.log
  //     })
  //   }
   
    
