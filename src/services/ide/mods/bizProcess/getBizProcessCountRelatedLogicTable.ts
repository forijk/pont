/**
 * @desc 获取数据域下业务过程关联的逻辑表个数
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据域id */
  domainId?: number;
  /** projectId */
  projectId?: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/bizProcess/countRelatedLogicTable',
    params,
    method: 'get'
  });
}
