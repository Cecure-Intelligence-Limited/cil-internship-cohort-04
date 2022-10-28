import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes
  faEdit = faEdit
  faHamburger = faHamburger
  faAngleDoubleDown = faAngleDoubleDown

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task)
  }

}
