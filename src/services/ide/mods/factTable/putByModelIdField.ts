/**
 * @desc 事实逻辑表-编辑字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** 事实表名字 */
  name: string;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/field',
    params: bodyParams,
    method: 'put'
  });
}
