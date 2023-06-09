export const MessagesErrorHelper = {
  UNAUTHORIZED: {
    code: 100,
    message: 'Unable to validate access token.',
    errorCode: 'UNAUTHORIZED',
  },
  UNAUTHORIZED_SMS: {
    code: 100,
    message: 'Confirmation via SMS is required for this transaction.',
    errorCode: 'UNAUTHORIZED_SMS',
  },
  INCORRECT_FIELD: {
    code: 0,
    message: 'A requisição contem campos inválidos.',
    errorCode: 'INCORRECT_FIELD',
  },
  INSUFFICIENT_QUOTAS: {
    code: 0,
    message: 'Não há cotas disponíveis suficientes.',
    errorCode: 'INSUFFICIENT_QUOTAS',
  },
  LIMIT_QUOTAS: {
    code: 0,
    message: 'Máximo de cotas atingidos.',
    errorCode: 'LIMIT_QUOTAS',
  },
  RAFFLE_NOT_FOUND: {
    code: 0,
    message: 'Rifa não encontrada ou removida.',
    errorCode: 'RAFFLE_NOT_FOUND',
  },
  INVALID_PERCENTAGE: {
    code: 0,
    message: 'A porcentagem é inválida.',
    errorCode: 'INVALID_PERCENTAGE',
  },
};
