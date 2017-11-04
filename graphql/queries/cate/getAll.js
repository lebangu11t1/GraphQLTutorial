import {
    GraphQLList
} from 'graphql'
import { cateType } from '../../types/cate'
import cateModel from '../../../models/cate'

export default {
    type: new GraphQLList(cateType),
    resolve() {
        const cates = cateModel.find().exec();
        if (!cates) {
            throw new Error('Error getting cates')
        }
        return cates
    }
}
