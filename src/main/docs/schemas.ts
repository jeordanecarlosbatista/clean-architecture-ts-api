import {
  loginParamsSchema, errorSchema, accountSchema, signUpParamsSchema,
} from './schemas/index';

export default {
  loginParams: loginParamsSchema,
  error: errorSchema,
  account: accountSchema,
  signUpParams: signUpParamsSchema,
};
