import { Validation } from '@presentation/protocols';

export class ValidationSpy implements Validation {
  error: Error | undefined
  input: any

  validate(input: any): any {
    this.input = input;
    return this.error;
  }
}
