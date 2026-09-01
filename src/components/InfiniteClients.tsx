import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

function InfiniteClients({ clients }) {
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const speed = 100; // px per second
    const moveBy = (delta / 1000) * speed;

    let next = x.get() - moveBy;

    // track width પ્રમાણે adjust કરજો
    if (next <= -3000) {
      next = 0;
    }

    x.set(next);
  });

  return (
    <div className="relative overflow-hidden">
      {/* Fade Left */}
      <div className="absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent" />

      <motion.div
        style={{ x }}
        className="flex gap-4 sm:gap-6 w-max"
      >
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              h-14 sm:h-16 md:h-20
              w-28 sm:w-36 md:w-44
              bg-white
              border border-gray-200
              rounded-xl md:rounded-2xl
              flex items-center justify-center
              px-3 sm:px-4
              shadow-sm
              hover:shadow-md
              transition-all
            "
          >
            <img
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className="
                max-h-7 sm:max-h-8 md:max-h-10
                max-w-[80px] sm:max-w-[110px] md:max-w-[140px]
                object-contain
              "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteClients;