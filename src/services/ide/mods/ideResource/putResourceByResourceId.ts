/**
 * @desc 更新资源文件
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** resourceId */
  resourceId: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/resource/{resourceId}',
    params: bodyParams,
    method: 'put'
  });
}
