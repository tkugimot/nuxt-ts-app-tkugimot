export interface Todo {
    id: number
    content: string
    isEditing: boolean
}

export class TodoClass implements Todo {
    id: number;
    content: string;
    isEditing: boolean;
  
    constructor(id: number, content: string, isEditing: boolean) {
      this.id = id;
      this.content = content;
      this.isEditing = isEditing;
    }
}
  
export interface State {
    todos: Todo[]
}
