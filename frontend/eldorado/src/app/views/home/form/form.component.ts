import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ScheduleclassService } from 'src/app/shared/scheduleclass/scheduleclass.service';
import { TeachersService } from 'src/app/shared/teachers/teachers.service';

interface Teachers {
  id: number;
  name: string;
  created_at: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  teacherForm = new FormControl('', [Validators.required]);
  dateForm    = new FormControl('', [Validators.required]);
  startForm   = new FormControl('', [Validators.required]);
  endForm     = new FormControl('', [Validators.required]);

  auxDate = '';

  scheduleclass = {
    user: localStorage.getItem('tokenid'),
    teacher:'',
    start:'',
    end:''
  };

  teachers: Teachers[] = [];

  constructor(
    private teacherService: TeachersService,
    private scheduleClass: ScheduleclassService
  ) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  async onSubmit(){
    try{
      var result = this.scheduleclass;
          result.start = this.auxDate+" "+result.start;
          result.end = this.auxDate+" "+result.end;

      this.scheduleClass.postClasses(result).subscribe(data => {
        this.scheduleClass.updateTable.emit(true);
      });

    } catch (e){
      console.error(e);
    }
  }

  getTeacher(){
    this.teacherService.getTeachers().subscribe((data: Teachers[]) => {
      this.teachers = data;
    })
  }

}
