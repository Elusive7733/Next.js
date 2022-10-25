import { useRouter } from 'next/router';

const AllBlogPost = () => {
    const router = useRouter();

    console.log(router.query)
    return (
        <div>
            <h1>Catch All Post</h1>        
        </div>
    );
}

export default AllBlogPost;