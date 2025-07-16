import Image from 'next/image';

const AppDownload = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      
        <div className="max-w-lg space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-500">
            Track, apply, and grow — <br /> anytime, anywhere.
          </h2>
          <p className="text-gray-400 font-medium">Download the app today!</p>

          
          <div className="flex gap-4 flex-wrap">
            <Image src="/appstore.png" alt="App Store" width={150} height={50} />
            <Image src="/playstore.png" alt="Google Play" width={150} height={50} />
          </div>

         
          <div className="flex items-center gap-4 mt-6">
            <span className="text-gray-400">Scan QR to download</span>
            <Image src="/qr.png" alt="QR Code" width={80} height={80} />
          </div>
        </div>

        
        <div className="w-full md:w-auto">
          <Image
            src="/phones.png" 
            alt="Mobile App Preview"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;


