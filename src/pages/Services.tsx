const ServiceDetails = [
  {
    title: "WEB/E-COMMERCE PLATFORMS",
    description: `We are pioneers in the development and delivery of high-quality standard websites. Our team crafts visually appealing, user-friendly sites tailored to meet your business needs. From design to deployment, we ensure a seamless process, providing robust, responsive websites that enhance your online presence and drive engagement and growth.

Extechnology excels in developing and delivering e-commerce websites that drive sales and enhance customer experiences. We create secure, scalable, and user-friendly platforms tailored to your business needs. From design to launch, our solutions ensure seamless transactions, intuitive navigation, and robust performance—empowering your online store to thrive.

`,
    sub_desc: `Business | E-commerce | Blog | Membership | Nonprofit  
Personal | News | Educational | Community Forum | Web Portals  
Brochure | Social Media | Entertainment | Informational

Shopping | Retail | Marketplace | Subscription  
Banking & Financial | Dropshipping | Crowdfunding`,
    image:
      "/programming-background-with-person-working-with-codes-computer 1.svg",
  },

  {
    title: "Mobile Applications",
    description: `
Creating innovative solutions suitable to meet diverse client needs. They excel in developing user-centric apps across Android, iOS, and other platforms, leveraging advanced technologies to deliver effective performance and intuitive user interfaces. Their development process emphasizes thorough market research and user feedback integration, ensuring each app is not only functional but also aligns with user expectations. 
extechnologies is committed to customer satisfaction, prioritizing transparency and communication throughout the development lifecycle. We maintain a strong focus on quality assurance, conducting rigorous testing to guarantee reliability and usability. Their dedication to excellence ensures clients receive powerful, scalable mobile applications that drive engagement and achieve business objectives effectively.
We consistently deliver with the concerns  
`,
    sub_desc: `Productivity | E-commerce | Finance | Health and Fitness | Educational
Entertainment | Travel | Utility | Social Media | Gaming`,
    image: "/representations-user-experience-interface-design 1.svg",
  },
  {
    title: "AI Integrated Applications",
    description: `
Harness the power of artificial intelligence to transform your business operations. Our AI-integrated applications are designed to boost efficiency, enhance user experience, and deliver smarter insights. From intelligent automation to predictive analytics, we help you stay ahead in the digital era.extechnology has a very finest talent in WhatsApp/ Web Chatbot development, offering sophisticated solutions perfect to enhance user engagement and streamline customer interactions. leverage advanced AI and machine learning capabilities to create intelligent chatbots that deliver personalized experiences and automate routine tasks efficiently. extechnology approach emphasizes user-centric design and seamless integration with existing systems, ensuring smooth deployment and optimal performance. We prioritize client satisfaction by providing scalable, reliable chatbot solutions that meet specific business needs and contribute to increased operational efficiency. With a commitment to innovation and quality, extechnologies stand out for delivering transformative digital experiences through their chatbot development services.`,
    image: "/representations-user-experience-interface-design 2.svg",
  },
  {
    title: "CRM Applications",
    description: `Our enterprise CRM solutions are designed to streamline business operations for e-commerce and small businesses. with intuitive interfaces, seamless onboarding, and scalable CRM solutions, you can enhance customer relationships and drive growth effortlessly.this is theultimate solution for seamless lead management,sales tracking, and customer support.Elevate your business efficiency with Extechnology CRM: powerful,intuitive, and designed for growth.Customized Solutions To Meet The Demands Of Your upgrade To CRM Designed Especially For Your Company To Streamline Your Workflow.`,
    image: "/customer-relationship-management-concept 2.svg",
  },
];

const Services = () => {
  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-7xl mx-auto pt-24">
        <h1
          className="md:text-7xl text-5xl px-5 md:px-0 font-bold pt-10 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Our Services
        </h1>
        <div className="">
          {ServiceDetails.map((item, index) => (
            <div
              key={index}
              className="pb-6 border-b border-dashed px-5 md:px-0 custom-dashed not-last:border-b border-sky-500 flex flex-col items-center  "
            >
              <h1
                className="md:text-4xl text-2xl  pt-14 pb-8 text-center font-bold text-[#9F37F8] "
                data-aos="fade-up"
                data-aos-duration="900"
              >
                {item.title}
              </h1>
              <img
                src={item.image}
                alt=""
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <p
                className="text-2xl pt-10 pb-3 text-justify"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                {item.description}
              </p>
              <p className="text-2xl py-2 text-justify" data-aos="fade-up" data-aos-duration="1200">
                {item.sub_desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
