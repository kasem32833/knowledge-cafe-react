import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    const {title, blogDetails, author, thumbImage} = blog;
    console.log(author.image);

    return (
        <div className=' border-2 rounded-lg  p-16 mb-16'>
            <img className='w-full h-80 mb-16' src={thumbImage} alt="" />
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <div className='flex items-center gap-5 mb-8'>
            <img src={author.image} alt={author.name} />
            <h4 className='text-xl'>{author.name}</h4>
            </div>
            
            <p>{blogDetails}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-full mt-4'>Read More</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;