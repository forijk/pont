/**
 * @desc 事实逻辑表-一键清空没有依赖的属性
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** modelId */
  modelId: number;
  /** 事实表名字 */
  name: string;
  /** lock */
  lock: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/field/attribute/',
    params,
    method: 'delete'
  });
}
