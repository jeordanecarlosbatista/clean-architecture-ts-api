import components from './components';
import paths from './paths';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'API Rest',
    description: 'Essa é a documentação da API XXXXX feita pelo Jeordane Batista',
    version: '1.0.0',
    contact: {
      name: 'Jeordane Carlos Batista',
      email: 'jeordane.batista@icloud.com.br',
      url: 'https://www.linkedin.com/in/jeordane-batista-4a7b70117',
    },
    license: {
      name: '',
      url: '',
    },
  },
  externalDocs: {
    description: '',
    url: '',
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal',
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login',
  }],
  paths,
  schemas,
  components,
};
