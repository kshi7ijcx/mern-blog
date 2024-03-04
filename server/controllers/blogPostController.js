const getPosts = async (req, res) => {
    res.status(200).json({posts: "all posts"})
};

const getOnePost = async (req, res) => {
    res.status(200).json({posts: "one post"})
};

const createPost = async (req, res) => {
    res.status(200).json({posts: "create"})
};

const updatePost = async (req, res) => {
    res.status(200).json({posts: "update"})
};

const deletePost = async (req, res) => {
    res.status(200).json({posts: "delete"})
};

export { getPosts, getOnePost, createPost, updatePost, deletePost };