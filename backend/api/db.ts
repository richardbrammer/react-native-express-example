import fs from 'fs';
import path from 'path';
import { User } from '../interfaces/user.interface';

/**
 * Get the list of users from the JSON file in db/users.json and return it as a Promise
 * @returns {Promise<User[]>} List of users
 */
const getUsers = (): Promise<User[]> => {
    const promise = new Promise<User[]>((resolve, reject) => {
        const filename = path.join(__dirname, '../../db/users.json');
        fs.readFile(filename, { encoding: 'utf-8' }, (err: NodeJS.ErrnoException | null, data: string) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
    return promise;
}

export const db = {
    getUsers
}
