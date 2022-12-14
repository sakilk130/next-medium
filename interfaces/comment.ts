export interface Comment {
  approved: boolean;
  message: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _id: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
