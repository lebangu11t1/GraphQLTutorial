import userMutation from './user';
import postMutation from './post';
import cateMutation from './cate';

export default {
    ...userMutation,
    ...postMutation,
    ...cateMutation
}
