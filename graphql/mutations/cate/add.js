import {
    GraphQLNonNull,
} from 'graphql';

import { cateType, cateInputType } from '../../types/cate';
import CateModel from '../../../models/cate';

export default {
    type: cateType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(cateInputType)
        }
    },
    resolve(root, params) {
        const cModel = new CateModel(params.data);
        const newCate = cModel.save();
        if (!newCate) {
            throw new Error('Error adding cate');
        }
        return newCate
    }
}
