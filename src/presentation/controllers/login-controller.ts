import { unauthorized } from '@presentation/helpers';
import { Controller, HttpResponse } from '@presentation/protocols';

export class LoginController implements Controller {
  constructor(
        private readonly authentication: any,
        private readonly validation: any,
  ) {}

  async handle(request: LoginController.Request): Promise<HttpResponse> {
    console.log(this.authentication);
    console.log(this.validation);
    console.log(request);
    return unauthorized();
  }
}

export namespace LoginController {
    export type Request = {
      email: string
      password: string
    }

  }
