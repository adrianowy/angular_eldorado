import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ScheduleclassService } from 'src/app/shared/scheduleclass/scheduleclass.service';

interface Classes{
  id: number;
  start: Date;
  end: Date;
  created_at: string;
  teacher: any[]
}

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  displayedColumns: string[] = ['teacher', 'date', 'start', 'end'];
  dataSource: Classes[] = [];

  constructor(
    private scheduleClass: ScheduleclassService
  ) { }

  ngOnInit(): void {
    this.getShedule();
    
    this.scheduleClass.updateTable.subscribe(
      update => {
        console.log('update');
        this.getShedule();
      }
    )

  }

  getShedule(){
    this.scheduleClass.getClasses().subscribe((data: Classes[]) =>{
      this.dataSource = data
    });
    
  }

}
