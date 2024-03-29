import { IPessoa } from '../models/interfaces';

export const MOCK_PESSOAS: IPessoa[] = [
  {
    codigoPessoa: 1,
    nome: 'Clare',
    sobrenome: 'Cornau',
    idade: 35,
    login: 'ccornau0@bigcartel.com',
    senha: '123456',
    status: 1,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua alterada',
        numero: '999',
        complemento: 'Casa',
        cep: '12345678',
      },
      {
        codigoEndereco: 2,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua Nova arumã',
        numero: '110',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 2,
    nome: 'Edouard',
    sobrenome: 'Elsmore',
    idade: 30,
    login: 'eelsmore1@goo.gl',
    senha: '123456',
    status: 2,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 2,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 3,
    nome: 'Aeriel Elldred',
    sobrenome: 'Elldred',
    idade: 39,
    login: 'aelldred2@archive.org',
    senha: '123456',
    status: 1,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 4,
    nome: 'Yan ',
    sobrenome: 'Chi Mung',
    idade: 25,
    login: 'ameachem3@columbia.edu',
    senha: '123456',
    status: 1,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 5,
    nome: 'Jeremiah',
    sobrenome: 'Hadwen',
    idade: 36,
    login: 'jhadwen4@contakte.ru',
    senha: '123456',
    status: 1,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 6,
    nome: 'Romilada ',
    sobrenome: 'Andrade',
    idade: 36,
    login: 'romildandr@times.com',
    senha: '123456',
    status: 2,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 7,
    nome: 'Ramirez ',
    sobrenome: 'Gonzales',
    idade: 36,
    login: 'ramgonz@yellowbook.com',
    senha: '123456',
    status: 1,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
  {
    codigoPessoa: 8,
    nome: 'Jayme ',
    sobrenome: 'Crotty',
    idade: 36,
    login: 'jcrotty7@opensource.org',
    senha: '123456',
    status: 1,
    enderecos: [
      {
        codigoEndereco: 1,
        codigoPessoa: 1,
        codigoBairro: 1,
        nomeRua: 'Rua 1',
        numero: '1',
        complemento: 'Casa',
        cep: '12345678',
      },
    ],
  },
];
