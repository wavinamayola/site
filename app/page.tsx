import Typewriter from "@/components/typewriter"

export const metadata = {
  title: 'Wave Mayola',
}

export default function Page() {
  return (
    <section>
      <Typewriter />
      <p className="mb-7 pt-3 text-justify">
        I'm Wave, a software engineer specializing in backend development. I have a passion for creating efficient and reliable software solutions that are robust and scalable. While my primary focus is on backend systems, I also embrace fullstack roles when needed, seamlessly integrating frontend tasks to deliver comprehensive solutions.
        <br />
      </p>

      <div className="w-full">
        <div className="coding inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="text-teal-500">{"> Wave.currentLocation"}</span>
            <span className="flex-1 typing items-center pl-2">"Cebu, Philippines"</span>
          </div>
          <br />
          <div className="mt-4 flex flex-col">
            <span className="text-teal-500">{"> Wave.resume"}</span>
          <span className="flex-1 typing items-center pl-2 text-yellow-100">"<a rel="noopener" href="/wave_resumeUpdated.pdf" target="_blank">wave.pdf</a>"</span>
          </div>
          <br />
          <div className="mt-4 flex flex-col">
            <span className="text-teal-500">{"> Wave.interests"}</span>
            <span className="flex-1 typing items-center pl-2">["coding", "running", "workout", "freediving", "photography", "videography"]</span>
          </div>
          <br />
          <div className="mt-4 flex flex-col">
            <span className="text-teal-500">{"> Wave.education"}</span>
            <span className="flex-1 typing items-center pl-2">"BS in Information Technology - University of San Jose Recoletos"</span>
          </div>
          <br />
          <div className="mt-4 flex flex-col">
            <span className="text-teal-500">{"> Wave.skills"}</span>
            <span className="flex-1 typing items-center pl-2">["Golang", "Kubernetes", "Grafana", "PHP", "Laravel", "ReactJS", "NextJS", "MySQL", "PostgreSQL", "InfluxDB", "Git", "Scraping"]</span>
          </div>
          <br />
        </div>
      </div>
    </section>
  )
}
