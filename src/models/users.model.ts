import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IUser from '../interfaces/users.interface';
import ILogin from '../interfaces/login.interface';
import mysql from './connection';

export default class UsersModel {
  private connection = mysql;

  public async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;

    const result = await this.connection.execute <ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getUserByEmailPassword(login: ILogin): Promise<IUser[]> {
    const { username, password } = login;

    const [rows] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
      );
    
    return rows;
  }
}