import BlogCard from "../components/BlogCard"
import image from '../assets/self-driving.jpeg';

const Blogs = () => {
  return (
    <div>
      <BlogCard title="Self Driving Cars" src={image} para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto ratione this is a self driving car, and is a very fast car and moves super fast' author='Kshitij Chauhan' date='23/01/2024'/>
    </div>
  )
}
export default Blogs