import AboutHeader from "@/layout/about-header/page";
import React from "react";
import Image from "next/image"; // Importing Image for images

const AboutUs = () => {
  return (
    <>
      <AboutHeader />
      {/* Section 1 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center w-3/5">
          <h1 className="text-4xl font-bold text-[#123f8e] mb-6 text-center">
            𝗔𝗯𝗼𝘂𝘁 𝗢𝘂𝗿 𝗖𝗼𝗺𝗽𝗮𝗻𝘆
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            With humble beginnings, Paragon started its journey in the heart of
            Dhaka city in 1952 with a printing press founded by the late Mizanur
            Rahman. In 1993 under the leadership of Mr. Moshiur Rahman and Mrs.
            Yasmin Rahman, the business diversified to the agricultural sector,
            becoming one of the pioneers in Bangladesh. With a great vision, it
            grew and flourished into ten different business sectors, represented
            now as Paragon Group.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Paragon envisions a green and developing future. Throughout all the
            projects under the group, a significant contribution to renewable
            energy and zero waste management is always executed as it is
            critical for maintaining preservation and sustainability.
          </p>
        </div>
      </section>
      {/* Section 2: Board of Directors */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <h2 className="text-4xl font-extrabold text-[#123f8e] mb-12 text-center">
            Board Of Directors
          </h2>
          {/* Directors */}
          <div className="space-y-16">
            {/* Director 1 */}
            <div className="flex flex-col md:flex-row  gap-8 group">
              {/* Left Image */}
              <div className="w-full md:w-1/3">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/assets/images/aboutHeaderimage2.jpeg"
                    alt="Moshiur Rahman"
                    height={300}
                    width={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
              {/* Right Content */}
              <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold text-[#123f8e] group-hover:text-[#f58220] transition-colors duration-300">
                  MOSHIUR RAHMAN
                </h3>
                <p>
                  <strong className="text-[#f58220]">Managin Director</strong>
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  I started my journey as an entrepreneur in the heart of a
                  printing factory in 1979 with my father, Mizanur Rahman. As
                  new industries began to evolve throughout Bangladesh, I
                  pivoted towards the poultry industry in 1992 as an
                  opportunity, capital, and vision amalgamated with what is
                  Paragon today.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  I want to reflect on our journey and share our values and
                  mission. When I started this company, my vision was to create
                  a business that not only provided high-quality day-old birds
                  but also made a positive impact on the world. In addition, I
                  wanted to build a company driven by a sense of purpose and a
                  commitment to doing what is right. Over the years, we have
                  grown and expanded, but our values have remained the same. We
                  believe in
                </p>
                <ul className=" list-none text-gray-700 space-y-2 text-justify">
                  <li>
                    <span className="font-bold">Innovation:</span> We constantly
                    push the boundaries of what is possible, using technology
                    and creativity to solve problems and create value for our
                    customers.
                  </li>
                  <li>
                    <span className="font-bold">Integrity:</span> We uphold the
                    highest standards of honesty and ethics in all business
                    dealings, treating our employees, customers, and partners
                    with respect and fairness.
                  </li>
                  <li>
                    <span className="font-bold">Sustainability:</span> We are
                    committed to minimizing our environmental impact and
                    promoting sustainable practices by implementing waste
                    reduction and recycling programs in all our projects.
                  </li>
                </ul>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  I am proud of what we have achieved together, and we will
                  continue to innovate, lead by example, and drive positive
                  change in the world.
                </p>
              </div>
            </div>
            <hr />
            {/* Director 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 group">
              {/* Right Image */}
              <div className="w-full md:w-1/3">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/assets/images/aboutHeaderimage3.jpg"
                    alt="Yasmin Rahman"
                    height={300}
                    width={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              {/* Left Content */}
              <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold text-[#123f8e] group-hover:text-[#f58220] transition-colors duration-300">
                  YASMIN RAHMAN
                </h3>
                <p>
                  <strong className="text-[#f58220]">Director</strong>
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  My husband and I started this company with a flock of
                  100-layer birds in my father's backyard. After 25 years of
                  commitment to this industry, Paragon is now one of the largest
                  poultry and animal feed industries in Bangladesh. Throughout
                  our journey, we always believed that sustainable practices are
                  not only good for the environment but also good for our
                  business.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  And next to sustainability, I want to emphasize the importance
                  of women entrepreneurship and its significant role in our
                  company's growth and success. Creating an environment that
                  empowers women is not only the right thing to do but also an
                  intelligent business decision. We are committed to providing
                  opportunities for women to develop their skills and build
                  successful businesses. We understand the challenges that women
                  entrepreneurs face, including access to capital, resources,
                  and networks. Therefore, we are actively working towards
                  creating a more inclusive and supportive environment that
                  enables women entrepreneurs to thrive.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  We know there is still work to be done, and we are committed
                  to ongoing improvement and innovation. Thank you for your
                  continued support of our company's values and mission.
                </p>
              </div>
            </div>
            <hr />
            {/* Director 3 */}
            <div className="flex flex-col md:flex-row gap-8 group">
              {/* Left Image */}
              <div className="w-full md:w-1/3">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/assets/images/aboutHeaderimage4.jpeg"
                    alt="Mehran Rahman"
                    height={300}
                    width={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold text-[#123f8e] group-hover:text-[#f58220] transition-colors duration-300">
                  MEHRAN RAHMAN
                </h3>
                <p>
                  <strong className="text-[#f58220]">Director</strong>
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  Paragon proudly serves our customers with high-quality
                  agricultural products, industrial-grade packaging, and
                  consumer foods and services. As an industrialist from the 21st
                  century, my mission is to deliver sustainable solutions that
                  contribute to the growth of our industries and ensure food
                  security for our nation.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  As we navigate the current challenges in the global
                  agricultural landscape, we remain committed to our core values
                  of integrity, innovation, and excellence. We continue to
                  invest in research and development and in our people to ensure
                  we provide our customers with the best products and services.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  We understand the importance of responsible use of natural
                  resources, and we are committed to sustainable practices that
                  support the health and well-being of our planet. However, with
                  the growing population and climate change, food security is
                  becoming a significant challenge for many countries.
                  Therefore, we must work together to find sustainable solutions
                  to ensure everyone can access safe and nutritious food.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  As entrepreneurs, we can leverage our skills and resources to
                  develop new technologies, business models, and strategies that
                  enhance food production, distribution, and consumption. We
                  also collaborate with governments, NGOs, and local communities
                  to build resilient food systems that can withstand the shocks
                  of natural disasters, conflicts, and pandemics.
                </p>
                <p className="text-md text-gray-700 leading-relaxed text-justify">
                  We thank you for your continued trust and support as we work
                  to grow and evolve our business. Together, we can build a
                  brighter and better future.
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
