import {a} from './heavyModule';

enum STATUS {
  IDLE,
  RUNNING,
  STOPPED,
}

export enum MSG {
  DEFAULT = "안녕하세요"
}

const PAYMENT_METHOD = {
  CREDIT_CARD : 'credit_card',
  DEBIT_CARD : 'debit_card',
  CASH : 'cash',
  MSG : '안녕하세요? 멍개입니다.'
} as const;
type PAYMENT_METHOD = typeof PAYMENT_METHOD[keyof typeof PAYMENT_METHOD]; 

console.log(MSG.DEFAULT)
console.log(PAYMENT_METHOD.MSG)