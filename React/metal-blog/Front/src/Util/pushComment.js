
import { getDatabase, set, ref, push } from 'firebase/database'

export function pushComment({ page }, user, text) {
    const db = getDatabase()
    const postListRef = ref(db, 'users/' + user.uid + '/comments/' + page)
    const newPostRef = push(postListRef)

    set(newPostRef, {
        text: text
    })
}