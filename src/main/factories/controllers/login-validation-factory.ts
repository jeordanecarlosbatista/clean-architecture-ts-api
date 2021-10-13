import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@validation/validators';
import { Validation } from '@presentation/protocols';
import { EmailValidatorAdapter } from '@infra/validators';

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['email', 'password'];
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
};
