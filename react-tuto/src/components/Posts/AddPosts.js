import React from 'react';

function AddPosts() {
    return (
        <>
            <h1>This is the part where you add new posts</h1>
            <form>
                <label>
                    Title
                </label>
                <br />
                <input type="text" placeholder="Title of your post" />
                <label>
                    Content
                </label>
                <input type="textarea" placeholder="content" />
            </form>
        </>
    )
}
export default AddPosts;