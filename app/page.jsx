const Home = () => {
  return (
    <section className='container'>
      <div className='relative space-y-6 max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-center'>
        <h1 className='font-extrabold text-xl sm:text-3xl lg:text-5xl tracking-tight'>
          Full Stack Developer with Expertise in ReactJS & .NET Core
        </h1>
        <div className='max-w-3xl mx-auto text-lg text-neutral-600 dark:text-neutral-500'>
          <p>
            Hi there! This is Nirav, & I specialize in creating highly
            responsive, user-friendly, and scalable web solutions that meet the
            unique needs of my clients.
          </p>
        </div>
        <button className='px-12 py-2 transition-all ease-in-out dark:bg-primary-dark bg-primary-light text-white dark:text-black rounded-full shadow-md hover:bg-transparent border-2 border-transparent hover:text-yellow-200 hover:border-yellow-200'>
          Get in touch
        </button>
      </div>
    </section>
  )
}

export default Home