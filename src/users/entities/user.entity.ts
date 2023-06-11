export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  deleted: boolean;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(user?: Partial<User>) {
    this._id = user?._id;
    this.firstName = user?.firstName;
    this.lastName = user?.lastName;
    this.email = user?.email;
    this.deleted = user?.deleted;
    this.deletedAt = user?.deletedAt;
    this.createdAt = user?.createdAt;
    this.updatedAt = user?.updatedAt;
  }
}
