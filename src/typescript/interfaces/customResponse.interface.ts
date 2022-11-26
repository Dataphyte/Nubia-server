import { Response } from 'express';
import { classType } from '../types/classnames.types';

// predefined methods added to the response object
export interface CustomResponseInterface extends Response {
  success?: any;
  created?: any;
  found?: any;
  updated?: any;
  deleted?: any;
}

export interface PayloadInterface {
  template: any[];
  classnames: classType[];
  type: 'Multiple' | 'Single';
}
