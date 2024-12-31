import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedFooter() {
  return (
    <div className="relative flex justify-between items-end overflow-hidden ">
      {/* Forward Moving First Image on the Left */}
      <div>
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        animate={{ x: ["0%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <Image
          src="/assets/images/footer1.png"
          quality={100}
          height={200}
          width={400}
          alt="Footer1"
          className="w-auto h-auto"
        />
      </motion.div>
      </div>

      {/* Static Second and Rotating Third Images on the Right */}
    <div>
    <div className="relative flex items-center space-x-4">
        <div>
          <Image
            src="/assets/images/footer2.png"
            quality={100}
            height={200}
            width={500}
            alt="Footer2"
            className="w-auto h-auto"
          />
        </div>

        {/* Rotating Third Image */}
        <motion.div
          className="absolute top-4 right-0"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          <Image
            src="/assets/images/footer_vector03.png"
            quality={100}
            height={50}
            width={100}
            alt="Footer3"
            className="w-auto h-auto"
          />
        </motion.div>
      </div>
    </div>
    </div>
  );
}
