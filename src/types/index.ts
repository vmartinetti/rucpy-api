// src/types/index.ts

import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { User as UserModel } from '../models';

export interface Request extends ExpressRequest {
  user?: UserModel;
}

export interface Response extends ExpressResponse {}

export interface User extends UserModel {}