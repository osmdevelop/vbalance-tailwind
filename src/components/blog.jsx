const posts = [
  {
    id: 1,
    title: 'Planet-first diet cuts risk of early death by nearly a third',
    href: 'https://www.cnn.com/2024/06/10/health/planetary-diet-longevity-study-wellness/index.html',
    description:
      'Closely following a planet-friendly diet of mostly fruits, vegetables and whole grains reduces the risk of premature death by nearly one-third in people, while also dramatically cutting the release of greenhouse gases devastating the planet.',
    imageUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-88307658.jpg?q=w_1110,c_fill/f_webp',
  },
  {
    id: 2,
    title: 'Avocados may play a beneficial role in diabetes management and prevention.',
    href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10489295/',
    description:
      'Research indicates that regular avocado consumption is associated with a lower risk of developing type 2 diabetes, particularly among women.',
    imageUrl:
      'https://www.verywellfit.com/thmb/JkYWOKkbR3qxN8cOeq9dpveIv-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado_annotated-29ebeb829c02433aaa55de1ab7d28643.jpg',
  },
  {
    id: 3,
    title: 'Regularly eating avocado linked to lower diabetes risk in women',
    href: 'https://www.medicalnewstoday.com/articles/regularly-eating-avocado-linked-to-lower-diabetes-risk-in-women#Studying-avocado-consumption-and-diabetes-risk',
    description:
      'A recent study from Mexico links avocado consumption with a lower diabetes risk. Image credit: Tatiana Maksimova/Getty Images.',
    imageUrl:
      'https://images.unsplash.com/photo-1502642074847-9afe11995f6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Блог-публікації</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Тут я ділюся цікавими статтями, ресурсами...
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {/* <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time> */}
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  {/* <div className="flex gap-x-2.5">
                    <img alt="" src={post.author.imageUrl} className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {post.author.name}
                  </div> */}
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href} target="_blank">
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
