import {ChildProcess} from 'child_process';
import _BN from 'bn.js';
import {KeyPair} from 'near-api-js';
import {Output} from 'promisify-child-process';

export {ServerError} from 'near-api-js/lib/utils/rpc_errors';
export {KeyPair, Connection} from 'near-api-js';
export {PublicKey, KeyPairEd25519} from 'near-api-js/lib/utils';
export {
  Action,
  createAccount,
  deployContract,
  functionCall,
  transfer,
  stake,
  addKey,
  deleteKey,
  deleteAccount,
  fullAccessKey,
  AccessKey,
} from 'near-api-js/lib/transaction';
export {AccountBalance} from 'near-api-js/lib/account';
export {JsonRpcProvider} from 'near-api-js/lib/providers/json-rpc-provider';
export {KeyStore} from 'near-api-js/lib/key_stores';
export * from 'near-api-js/lib/providers/provider';

export {DEFAULT_FUNCTION_CALL_GAS} from 'near-api-js/lib/constants';

export class BN extends _BN {
  toJSON(): string {
    return this.toString(10);
  }
}

export type Args = Record<string, any>;

export interface NamedAccount {
  accountId: string;
}

export interface CallOptions {
  gas?: string | BN;
  attachedDeposit?: string | BN;
  signWithKey?: KeyPair;
}

export type ChildProcessPromise = Promise<ChildProcess & Promise<Output>>;
