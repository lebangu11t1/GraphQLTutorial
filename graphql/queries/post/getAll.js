import {
    GraphQLList
} from 'graphql'
import { postType } from '../../types/post'
import postModel from '../../../models/post'

export default {
    type: new GraphQLList(postType),
    resolve() {
        const posts = postModel.find().exec();
        if (!posts) {
            throw new Error('Error getting posts')
        }
        return posts
    }
}
