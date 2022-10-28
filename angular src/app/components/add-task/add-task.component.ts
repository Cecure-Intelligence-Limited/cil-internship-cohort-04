import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  name!: string;
  email!: string;
  phone!: string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newTask = {
      name: this.name,
      Email: this.email,
      Phone: this.phone
    }
    this.onAddTask.emit(newTask)

    this.name = ""
    this.email = ""
    this.phone = ""
  }
}
