/**
 * @desc 维度表详情-主维度信息等
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
}

export const init = new defs.DimBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}',
    params,
    method: 'get'
  });
}
