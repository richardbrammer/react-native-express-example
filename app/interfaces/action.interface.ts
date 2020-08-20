import { USERS_ACTION_TYPES } from '../enums/index';
import { User } from './user.interface';

export interface Action {
    type: USERS_ACTION_TYPES,
    payload?: User[]
}