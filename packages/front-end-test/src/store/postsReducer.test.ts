import { PostStatus } from '../models/Types';
import reducer, { actions } from './postsReducer';

describe('', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: "" })).toEqual({
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: []
        });
    })

    it('should handle a status being updated to "add"', () => {
        const previousState = {
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: []
        }
        expect(reducer(previousState, actions.updateStatus(PostStatus.add))).toEqual({
            status: PostStatus.add,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: []
        })
    })

    it('should handle post.title being replaced with new title', () => {
        const previousState = {
            status: PostStatus.edit,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: []
        }
        expect(reducer(previousState, actions.editTitle("updated title"))).toEqual({
            status: PostStatus.edit,
            posts: [],
            post: { id: 0, title: "updated title", body: "" },
            comparedPosts: []
        })
    })

    it('should handle post.body being replaced with new body', () => {
        const previousState = {
            status: PostStatus.edit,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: []
        }
        expect(reducer(previousState, actions.editBody("updated body"))).toEqual({
            status: PostStatus.edit,
            posts: [],
            post: { id: 0, title: "", body: "updated body" },
            comparedPosts: []
        })
    })

    it('should handle comparedPosts being added a new post into the array', () => {
        const previousState = {
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: []
        }
        expect(reducer(previousState, actions.addComparedPost({ id: 1, title: "title", body: "body" }))).toEqual({
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: [{ id: 1, title: "title", body: "body" }]
        })
    })

    it('should handle comparedPosts being removed a post away from the array', () => {
        const previousState = {
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: [{ id: 1, title: "title", body: "body" }, { id: 2, title: "title2", body: "body2" }, { id: 3, title: "title3", body: "body3" }]
        }
        expect(reducer(previousState, actions.removeComparedPost(2))).toEqual({
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "" },
            comparedPosts: [{ id: 1, title: "title", body: "body" }, { id: 3, title: "title3", body: "body3" }]
        })
    })
})