import { tasks } from './index';

type TaskStatus = undefined | 'done';
interface TaskInterface {
  title: string;
  checklist: TaskStatus;
  addToTasks: () => void;
}

class Task implements TaskInterface {
  title: string;
  checklist: TaskStatus;

  constructor(title: string, checklist: TaskStatus) {
    this.title = title;
    this.checklist = checklist;
  }

  addToTasks(): void {
    tasks.push(this);
  }
}

export default Task;
