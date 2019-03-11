/**
 * @desc 关联维度设为属性字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** dimId */
  dimId: number;
  /** 属性id */
  attributeId?: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/toAttrs',
    params,
    method: 'put'
  });
}
