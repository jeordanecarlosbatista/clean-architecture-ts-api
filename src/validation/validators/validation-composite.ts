import { Validation } from '@presentation/protocols';

export class ValidationComposite implements Validation {
  constructor(private readonly validations: Validation[]) {}

  // eslint-disable-next-line consistent-return
  validate(input: any): any {
    // eslint-disable-next-line no-restricted-syntax
    for (const validation of this.validations) {
      const error = validation.validate(input);
      if (error) {
        return error;
      }
    }
  }
}
