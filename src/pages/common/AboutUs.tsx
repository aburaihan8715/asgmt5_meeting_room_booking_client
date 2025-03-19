// import SectionHeading from '@/components/common/SectionHeading';
// import { motion } from 'motion/react';

// const teamMembers = [
//   {
//     name: 'John Doe',
//     role: 'CEO',
//     bio: 'John has over 20 years of experience in leading teams and driving innovation.',
//     image:
//       'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'CTO',
//     bio: 'Jane is an expert in technology and oversees all technical aspects of our projects.',
//     image:
//       'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=',
//   },
//   {
//     name: 'Emily Johnson',
//     role: 'CMO',
//     bio: 'Emily leads our marketing efforts and is passionate about creating impactful campaigns.',
//     image:
//       'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=',
//   },
// ];

// const AboutUs = () => {
//   return (
//     <div className="text-gray-800 bg-gray-50">
//       {/* Our Mission Section */}
//       <section className="py-20 bg-white">
//         <div className="px-6 mx-auto max-w-7xl lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <div className="flex justify-center">
//               <SectionHeading heading="Our Mission" />
//             </div>
//             <p className="max-w-md mx-auto text-lg">
//               Our mission is to provide exceptional services that exceed
//               our clients' expectations and foster a culture of innovation
//               and collaboration.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Meet the Team Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="px-6 mx-auto max-w-7xl lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-12 text-center"
//           >
//             <div className="flex justify-center">
//               <SectionHeading heading="Meet the Team" />
//             </div>
//             <p className="max-w-md mx-auto mb-8 text-lg">
//               Our team is made up of dedicated professionals who are
//               passionate about their work and committed to achieving
//               excellence.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {teamMembers.map((member) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col items-center p-6 text-center transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl"
//               >
//                 <div className="relative overflow-hidden rounded-full">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="object-cover w-32 h-32 transition duration-300 ease-in-out"
//                   />
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">
//                   {member.name}
//                 </h3>
//                 <p className="mb-2 text-sm text-gray-600">{member.role}</p>
//                 <p className="text-sm text-gray-500">{member.bio}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="px-6 mx-auto max-w-7xl lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <div className="flex justify-center">
//               <SectionHeading heading="Our Story" />
//             </div>
//             <p className="max-w-md mx-auto text-lg">
//               Our company started with a vision to revolutionize the
//               industry. Over the years, we have grown and evolved,
//               embracing new challenges and achieving milestones that
//               reflect our commitment to excellence.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;

import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'John Green',
    role: 'Head Gardener',
    bio: 'John has over 20 years of experience in gardening and sustainable farming practices.',
    image:
      'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=',
  },
  {
    name: 'Jane Meadows',
    role: 'Horticulturist',
    bio: 'Jane is an expert in plant biology and specializes in helping plants thrive in different climates.',
    image:
      'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=',
  },
  {
    name: 'Emily Rose',
    role: 'Landscape Designer',
    bio: 'Emily creates beautiful garden designs that blend aesthetics with functionality, perfect for any outdoor space.',
    image:
      'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=',
  },
];

const AboutUs = () => {
  return (
    <div className="mt-[80px] bg-gray-50 text-gray-800 md:mt-0 px-1">
      {/* Our Mission Section */}
      <section className="py-10 bg-white">
        <div className="md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-5">
              <SectionHeading heading="Our Mission" />
            </div>
            <p className="max-w-2xl mx-auto text-lg">
              Our mission is to inspire and empower people to grow their
              own gardens, no matter the space or experience level. We
              believe gardening is a rewarding and sustainable way to
              connect with nature and nourish both the body and soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-5">
              <SectionHeading heading="Meet the Team" />
            </div>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Our team consists of passionate gardeners and experts in
              horticulture, landscaping, and plant care. We are dedicated
              to sharing our knowledge and helping you cultivate your own
              green oasis.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center p-6 text-center transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-xl"
              >
                <div className="relative w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-5">
              <SectionHeading heading="Our Story" />
            </div>
            <p className="max-w-2xl mx-auto text-lg">
              Our journey began with a simple love for gardening. Over the
              years, we have grown from a small community of garden
              enthusiasts to a platform that educates, inspires, and
              supports people in their gardening adventures. From beginners
              to seasoned pros, we aim to provide resources and tips for
              growing thriving gardens and embracing sustainable practices.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
