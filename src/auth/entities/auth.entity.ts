export class Auth {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  deleted: boolean;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(auth?: Partial<Auth>) {
    this._id = auth?._id;
    this.firstName = auth?.firstName;
    this.lastName = auth?.lastName;
    this.email = auth?.email;
    this.deleted = auth?.deleted;
    this.deletedAt = auth?.deletedAt;
    this.createdAt = auth?.createdAt;
    this.updatedAt = auth?.updatedAt;
  }
}
