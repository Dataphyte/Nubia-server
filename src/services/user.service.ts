import { UpdateWriteOpResult } from 'mongoose';
import UserModel, { UserType } from '../models/user';

class User_Service {
  async CREATE(userData: UserType): Promise<UserType> {
    const User = await UserModel.create(userData);
    return User;
  }

  async GET(user_id: string): Promise<UserType | null> {
    const User = await UserModel.findById(user_id).lean();
    return User;
  }
  async UPDATE(id: string, updateData: any): Promise<UpdateWriteOpResult> {
    const updatedUser = await UserModel.updateOne(
      { _id: id },
      { $set: { ...updateData } },
      { new: true }
    );
    return updatedUser;
  }
}

export default new User_Service();
