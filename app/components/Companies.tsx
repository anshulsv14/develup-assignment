import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const companies = [
  { name: 'Toyota', logo: '/assets/companies/toyota.png' },
  { name: 'Equitas', logo: '/assets/companies/equitas.png' },
  { name: 'Zepto', logo: '/assets/companies/zepto.png' },
  { name: 'HDFC', logo: '/assets/companies/hdfc.png' },
  { name: 'Justdial', logo: '/assets/companies/justdial.png' },
  { name: 'L&T', logo: '/assets/companies/LT.png' },
];

const CompanyLogos = () => {
  return (
    <section className="bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-medium text-gray-900 mb-8">
          Top companies hiring at <span className="text-blue-500 font-semibold">DevelUp</span>
        </h2>
        <Marquee autoFill>
        <div className="flex flex-wrap justify-center items-center ">
          {companies.map((company, index) => (
            <Image
              key={index}
              src={company.logo}
              alt={company.name}
              width={100}
              height={60}
              className="object-contain mx-8"
            />
          ))}
        </div>
        </Marquee>
      </div>
    </section>
  );
};

export default CompanyLogos;
