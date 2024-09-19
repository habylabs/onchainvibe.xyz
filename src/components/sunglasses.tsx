import Image from "next/image";

const Sunglasses = () => {
  return (
    <div className="w-full flex justify-center space-x-4 pt-8 pb-16">
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-45" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-0" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform -rotate-45" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-180" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-45" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-0" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform -rotate-45" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-180" />
      <Image src="/sunglasses.svg" alt="sunglasses" width={100} height={38} className="w-16 h-4 text-purple-500 transform rotate-45" />
    </div>
  );
};

export default Sunglasses;