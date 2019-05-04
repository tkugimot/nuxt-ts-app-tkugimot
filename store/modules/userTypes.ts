export interface User {
    isLoggedin: boolean
    displayName: string | null
    email: string | null
}

export class UserClass implements User {
    isLoggedin: boolean;
    displayName: string | null;
    email: string | null;
  
    constructor(isLoggedin: boolean, displayName: string | null, email: string | null) {
      this.isLoggedin = isLoggedin;
      this.displayName = displayName;
      this.email = email;
    }
}
  
export interface State {
    user: User
}
