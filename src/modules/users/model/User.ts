import { v4 as uuidV4 } from "uuid";

class User {
  readonly id: string;
  private admin: boolean;
  readonly created_at: Date;
  readonly updated_at: Date;

  constructor(readonly name: string, readonly email: string) {
    if (!this.id) this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  setAdmin(admin: boolean): void {
    this.admin = admin;
  }

  getAdmin(): boolean {
    return this.admin;
  }
}

export { User };
