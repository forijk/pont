/**
 * @desc 新增文件
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/file/',
    params: bodyParams,
    method: 'post'
  });
}
