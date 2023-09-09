import mongoose, { Schema } from 'mongoose';

type UserType = {
  firstname: string;
  lastname: string;
  othernames: string;
  email: string;
  projects: string[];
};

const UserSchema = new Schema<UserType>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    othernames: { type: String, required: true },
    email: { type: String, required: true },
    projects: [{ type: Schema.Types.ObjectId, ref: 'projects' }],
  },
  { collection: 'users', timestamps: true }
);

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
