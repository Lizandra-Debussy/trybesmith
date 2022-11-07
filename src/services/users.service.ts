import jsonwebtoken from 'jsonwebtoken';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/users.interface';
import UsersModel from '../models/users.model';
import HttpException from '../utils/http.exception';

export default class UsersService {
  public user = new UsersModel();

  public jwt = jsonwebtoken;

  public async login(loginBody: ILogin) {
    const user = await this.user.getUserByEmailPassword(loginBody);
    
    if (user.length === 0) { throw new HttpException(401, 'Username or password invalid'); }

    return this.generateToken(user[0]);
  }
  
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