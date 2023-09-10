import mongoose, { Schema } from 'mongoose';
import { ProjectType } from './project.model';

export type UserType = {
  uid: string;
  firstname: string;
  lastname: string;
  email: string;
  accountType: 'individual' | 'organisation';
  projects: string[];
  organization: {
    orgName: string;
    position: string;
    companySize: string;
    niche: string;
  };
};

const UserSchema = new Schema<UserType>(
  {
    uid: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    accountType: {
      type: String,
      enum: ['individual', 'organization'],
      required: true,
    },
    organization: {
      orgName: String,
      position: String,
      companySize: String,
      niche: String,
    },
    projects: [{ type: Schema.Types.ObjectId, ref: 'projects' }],
  },
  { collection: 'users', timestamps: true }
);

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
