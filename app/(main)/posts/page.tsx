import PostsTable from "admin-ui/components/posts/PostsTable";
import BackButton from "admin-ui/components/BackButton";
import PostsPagination from "admin-ui/components/posts/PostsPagination";


const PostsPage = () => {
    return (
        <>
            <BackButton text="Go Back" link="/"/>
            <PostsTable />
            <PostsPagination/>
        </>
    );
};

export default PostsPage;