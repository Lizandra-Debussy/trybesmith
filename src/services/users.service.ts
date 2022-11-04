import jsonwebtoken from 'jsonwebtoken';
import IUser from '../interfaces/users.interface';
import UsersModel from '../models/users.model';

export default class ProductsService {
  public user = new UsersModel();

  public jwt = jsonwebtoken;
  
  public generateToken(user: IUser) {
    const payload = { id: user.id, username: user.username };
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }

  public create(userData: IUser): Promise<IUser> {
    return this.user.create(userData);
  }
}