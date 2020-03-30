import { ERROR_MESSAGES } from './error.messages';

export class ErrorHandler extends Error {
  public code: number;
  message: string;

  constructor(type: any) {
    super();
    this.message = type;
    switch (type) {
      case ERROR_MESSAGES.UNKNOW_METHOD:
        this.code = 405;
        break;
      case ERROR_MESSAGES.MISSING_AUTHORIZATION:
        this.code = 401;
        break;
      case ERROR_MESSAGES.MISSING_AUTHORIZATION:
        this.code = 401;
        break;
      case ERROR_MESSAGES.BAD_PARAMETER:
        this.code = 400;
        break;
      default:
        this.code = 417;
        break;
    }
  }
}

export const logError = async (title: any, error: any) => {
  console.log(`============================= ${title} ==============================`);
  console.log(error);
  console.log('==============================================================================');
};

export const REPOSITORY_CONNECTION_FAILED = (error, ...args) => {
  logError(ERROR_MESSAGES.REPOSITORY_ERROR, error);
  throw new ErrorHandler(ERROR_MESSAGES.REPOSITORY_ERROR);
};
