import { Validation } from '@presentation/protocols';
import { MissingParamError } from '@presentation/errors';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  // eslint-disable-next-line consistent-return
  validate(input: any): any {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
