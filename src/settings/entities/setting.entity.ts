export class Setting {
  _id: string;
  name: string;
  icon: string;
  route: string;
  active: boolean;
  position: number;
  deleted: boolean;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(setting?: Partial<Setting>) {
    this._id = setting?._id;
    this.name = setting?.name;
    this.icon = setting?.icon;
    this.route = setting?.route;
    this.active = setting?.active;
    this.position = setting?.position;
    this.deleted = setting?.deleted;
    this.deletedAt = setting?.deletedAt;
    this.createdAt = setting?.createdAt;
    this.updatedAt = setting?.updatedAt;
  }
}
