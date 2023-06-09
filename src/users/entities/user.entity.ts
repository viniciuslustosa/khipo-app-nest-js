export class User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatarUrl?: string;
  zipcode?: string;
  street?: string;
  neighborhood?: string;
  city: string;
  state: string;
  socket: string;
  number: string;
  type: string;
  deleted: boolean;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(user?: Partial<User>) {
    this._id = user?._id;
    this.name = user?.name;
    this.email = user?.email;
    this.phoneNumber = user?.phoneNumber;
    this.avatarUrl = user?.avatarUrl;
    this.zipcode = user?.zipcode;
    this.street = user?.street;
    this.neighborhood = user?.neighborhood;
    this.socket = user?.socket;
    this.city = user?.city;
    this.state = user?.state;
    this.number = user?.number;
    this.type = user?.type;
    this.deleted = user?.deleted;
    this.deletedAt = user?.deletedAt;
    this.createdAt = user?.createdAt;
    this.updatedAt = user?.updatedAt;
  }
}
