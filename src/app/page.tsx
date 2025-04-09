"use client"

import { motion } from "motion/react";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-black border-b-2 border-gray-900 w-full font-serif">
        <div className="w-2/3  flex flex-col items-center">
          <motion.div className="items-center flex flex-col h-1/2 justify-center  gap-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-indigo-300 text-center"
            >
              Tired of Rebuilding the Same Backend?
            </motion.h1>


            <motion.h2 className="text-xl font-serif">
              <span className="text-4xl md:text-7xl font-bold p-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500">One-GO</span>
              <h1 className="mt-4 text-center">
                is here for you at your service.
              </h1></motion.h2>
          </motion.div>
          <motion.div className="my-10 text-center text-xl text-slate-500">
            <ul>
              <li>
                Let’s be real — building a beautiful frontend is fun.

              </li>
              <li>
                But setting up a backend again just to handle some blogs, images, or project links?
                Not so much.
              </li>
              <li>
                Every time we worked on a portfolio, a client site, or a quick side project, we kept running into the same problem:

              </li>
            </ul>

          </motion.div>
          <div className=" flex flex-row mt-10 justify-center items-center  ">
            <div className="text-4xl md:text-7xl font-bold p-2 rounded-xl w-2/3  ">
              Why ? 🤔
            </div>

            <div className="mt-10  h-1/2 flex justify-center items-center bg-gradient-to-r from-black via-violet-800 to-black py-6 ">
              <ul className="flex flex-col gap-4">

                <li className="text-2xl text-violet-300">
                  “I just want a simple way to manage my content… and use it wherever I want.”

                </li>
                <li>
                  So we built exactly that.
                </li>
              </ul>

            </div>
          </div>


        </div>

      </div>
      <div className="min-h-screen   px-6 py-12 bg-gradient-to-t  from-black via-indigo-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-indigo-300"
          >
            Effortless Content Management for Your Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            A modern CMS that gives you instant APIs to power your websites, portfolios, and apps — without writing any backend.
          </motion.p>
          <div className="flex justify-center gap-4">
            <button className="rounded-2xl px-6 py-3 text-lg shadow-xl">
              Get Started
            </button>
            <button className="rounded-2xl px-6 py-3 text-lg">
              View Demo
            </button>
          </div>
        </div>

        <section className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Built for Speed, Simplicity, and Scale</h2>
          <p className="text-indigo-300 text-lg font-bold">
            Whether you&apos;re building a personal site, managing client work, or launching a product — our CMS helps you manage and deliver content without the hassle.
          </p>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Instant API Access",
              desc: "Add content and access it instantly via a secure RESTful API. No setup required.",
            },
            {
              title: "Fully Customizable",
              desc: "Define content types that match your exact use case — blogs, links, images, anything.",
            },
            {
              title: "Built for Everyone",
              desc: "From devs to designers, anyone can manage content with our clean, intuitive dashboard.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl shadow-md  hover:shadow-2xl hover:shadow-indigo-500/50 shadow-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}

            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-indigo-200 font-semibold">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-semibold mb-4">Let&apos;s Build Smarter, Not Harder</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We built this CMS to remove the boring parts of building websites. So you can focus on your ideas, your frontend, your story.
          </p>
          <div className="mt-6">
            <button className="rounded-2xl px-8 py-4 text-lg shadow-lg">
              ✨Start Creating Today
            </button>
            <div>
              <ul>
                <li>
                  Your content.
                </li>
                <li>
                  Your frontend.
                </li>
                <li>
                  Our APIs.
                </li>
              </ul>

              → [Get Started Now]
              → [See it in Action]
            </div>
          </div>
        </section>
      </div>
    </>

  );
}




// import Blogs from "@/components/frontPage/Blogs";
// import Docs from "@/components/frontPage/Docs";
// import Links from "@/components/frontPage/Links";


// export default function Home() {
//   return (
//     <>
//       <div className="container flex h-screen w-full flex-col ">
//         {/* fetures 
//         links: projects, github, linkedIn , twiiter, medium blogs
//         images,
//         graphic designs
//         */}
//         <div className="h-[90%] flex flex-col justify-center items-center">
//           <h1 className="text-6xl font-bold">One-Go</h1>
//           <p>Effortless Content Management for Developers & Teams</p>
//           <div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Get Started
//             </button>
//             {/* for demo generate demo from  */}
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               View demo
//             </button>
//           </div>
//         </div>

//       </div>
//       <div className="flex justify-center h-screen w-full bg-gradient-to-br from-black via-violet-700 to-black">
//         <div className=" flex flex-row justify-center items-center">
//           <div className="flex text-5xl font-bold font-mono m-4 bg-black w-1/2 h-1/2 justify-center items-center rounded-4xl text-center  shadow-2xl shadow-purple-800">Built for Modern Workflows:</div>
//           <ul className="flex flex-col text-xl font-sans gap-4 text-white font-bold ">
//             <li className="">
//               <span className="font-bold text-3xl text-amber-200 "> - RESTful APIs </span>to fetch your content anywhere — websites, apps, portfolios, dashboards.
//             </li>
//             <li>
//               -   Easy-to-use dashboard for managing blogs, links, images, and more.
//             </li>
//             <li>
//               - Role-based access for teams and contributors.
//             </li>
//           </ul>

//         </div>

//       </div>
//       <div className="flex justify-center h-screen w-full bg-gradient-to-b from-violet-700 via-black to-black">
//         <div className=" flex flex-row-reverse justify-center items-center">

//           <div className="flex text-5xl font-bold font-mono m-4 bg-black w-1/2 h-1/2 justify-center items-center rounded-4xl text-center  shadow-2xl shadow-purple-800">Fast, Reliable, and Secure:</div>
//           <ul className="flex flex-col text-xl font-serif gap-4 ">
//             <li>
//               - Optimized for performance and scalability.
//             </li>
//             <li>
//               - Secure authentication and custom API keys.
//             </li>
//             <li>
//               - Regular backups and SSL encryption.
//             </li>
//           </ul>
//         </div>

//       </div>
//       <div className="flex justify-center  h-screen w-full bg-gradient-to-b from-black to-amber-50 ">
//         <div className=" flex flex-row justify-center items-center">
//           <div className="flex text-5xl font-bold font-mono m-4 bg-black w-1/2 h-1/2 justify-center items-center rounded-4xl text-center  shadow-2xl shadow-slate-800">Your Content, Anywhere:</div>
//           <ul className="flex flex-col text-xl font-serif gap-4 text-black ">
//             <li>
//               <span className="mr-2 text-2xl text-white">
//                 Fetch
//               </span>
//               content via API.

//             </li>
//             {/* <li>
//               <span className="mr-2 text-2xl text-white">
//                 Plug
//               </span>
//               into static sites, SPAs, mobile apps, or any platform.
//             </li> */}

//           </ul>

//         </div>


//       </div>

//       <Blogs />
//       <Docs />
//       <Links />
//     </>
//   );
// }
