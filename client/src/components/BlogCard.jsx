const BlogCard = ({ title, src, para, author, date }) => {
    return (
        <div className="flex gap-6 max-w-5xl mt-10 mx-auto px-5 max-sm:max-w-sm max-sm:flex-col">
            <div className='max-w-md'>
                <img src={src} className="rounded-3xl"/>
            </div>
            <div className="flex flex-col gap-5 max-sm:gap-1 max-sm:leading-5">
                <div className="text-3xl font-semibold max-sm:text-base">
                    <h2>{title}</h2>
                </div>
                <div className='font-semibold'>
                    <span>{author}</span>
                    <span>{' '}</span>
                    <span>{date}</span>
                </div>
                <div className="max-w-xl max-sm:text-sm">
                    <p>{para}</p>
                </div>
            </div>
        </div>
    )
}
export default BlogCard