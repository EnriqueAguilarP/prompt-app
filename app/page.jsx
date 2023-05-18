import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share 
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Art Powered Prompts </span>
      </h1>
      <p className="desc text-center">
      Welcome to AI Art Prompt, the website where you can find and share some prompts for stunning artworks in seconds using the power of Artificial Intelligence. 
      You can also browse and share your creations with a vibrant community of AI art enthusiasts. 
      AI Art Prompt is free to use, open-source, easy to access, and fun to explore. 
      Start creating today and unleash your inner artist with AI Art!
      </p>
      <Feed />
    </section>
  )
}

export default Home