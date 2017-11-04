import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';
import {postType} from "./post";

export const cateType = new GraphQLObjectType({
    name: 'Cate',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        posts: {
            type: new GraphQLList(postType),
            resolve(cate) {
                const { _id } = cate;
                return PostModel.find({ cid: _id }).exec()
            }
        },
    })
})

export const cateInputType = new GraphQLInputObjectType({
    name: 'CateInput',
    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
})
