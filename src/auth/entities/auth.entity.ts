export class Auth {
  _id: string;
  name: string;
  email: string;
  organizationId: string;
  deleted: boolean;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(auth?: Partial<Auth>) {
    this._id = auth?._id;
    this.name = auth?.name;
    this.email = auth?.email;
    this.organizationId = auth?.organizationId;
    this.deleted = auth?.deleted;
    this.deletedAt = auth?.deletedAt;
    this.createdAt = auth?.createdAt;
    this.updatedAt = auth?.updatedAt;
  }
}
