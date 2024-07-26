import Typewriter from "@/components/typewriter"

export const metadata = {
  title: 'Works',
}

export default function Page() {
  return (
    <section>
      <Typewriter words={["Works"]} />
      <div className="w-full pt-3">
        <div className="coding inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 flex flex-col">
            <div className="mt-4 flex flex-row">
              <span className="text-teal-500">wavelocal:~$</span>
              <p className="flex-1 typing items-center pl-2">
                SELECT * FROM works;
                <br />
              </p>
              <br />
            </div>
            <span className="flex flex-col">I'm currently working on some exciting projects. Please check back soon to see my work!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
