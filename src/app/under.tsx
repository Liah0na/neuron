import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <Image
        alt="Neuron IT Ltda."
        className=""
        height={100}
        src="/images/logo.png"
        width={100}
      />
    </div>
  );
}

export default UnderConstruction;
