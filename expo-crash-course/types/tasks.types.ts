export type TaskStatus = 'Done' | 'In Progress' | 'To-Do';

export interface TaskIcon {
  name: string;
  backgroundColor: string;
}

export interface Task {
  id: string;
  category: string;
  title: string;
  time: string; 
  status: TaskStatus;
  icon: TaskIcon;
}