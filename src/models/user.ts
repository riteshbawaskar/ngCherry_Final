﻿
export class User  {
  id: string;
  userId: string;
  password: string;
  firstName: string;
  lastName: string;
  active: boolean; // status if active or inactive
  email: string;

  
  GetUser(user)
  {
      {
          this.id = user.id ;
          this.firstName = user.firstName || '';
          this.lastName = user.lastName || '';
          this.userId = user.userId || '';
          this.password = user.password || '';
          this.active = user.active || true;
          this.email = user.email || '';
      }
  }
}
