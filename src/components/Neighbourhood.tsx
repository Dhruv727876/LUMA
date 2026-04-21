import { motion } from 'framer-motion';
import { Map, Marker, ZoomControl } from "pigeon-maps";

export function Neighbourhood() {
  const landmarks = [
    { name: "DPS School", distance: "0.8 km" },
    { name: "Apollo Hospital", distance: "1.2 km" },
    { name: "Inorbit Mall", distance: "2.1 km" },
    { name: "Metro Station", distance: "0.5 km" },
    { name: "International Airport", distance: "18 km" },
  ];

  const center: [number, number] = [17.4325, 78.4070]; // Jubilee Hills, Hyderabad

  return (
    <section id="location" className="w-full bg-white py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row min-h-[70vh]">
        
        {/* Left Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full md:w-1/2 p-6 md:pr-8 h-[50vh] md:h-auto"
        >
          <div className="w-full h-full border border-accent overflow-hidden relative grayscale-[0.8] hover:grayscale-0 transition-all duration-700">
            <Map 
              height={500} 
              defaultCenter={center} 
              defaultZoom={14}
              mouseWheel={false}
            >
              <ZoomControl />
              <Marker width={50} anchor={center} color="rgba(201, 169, 110, 1)" />
            </Map>
            
            <div className="absolute bottom-6 left-6 z-10">
              <div className="bg-white px-4 py-2 border border-accent/30 shadow-lg text-primary font-body text-[13px] tracking-wide">
                LUMA — Jubilee Hills
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0">
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display italic text-[40px] md:text-[48px] text-primary leading-[1.1] mb-6"
          >
            Prime Location.<br />Unmatched Connectivity.
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="h-[1px] bg-accent mb-12"
          />

          <div className="flex flex-col">
            {landmarks.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + (i * 0.08), duration: 0.5 }}
                className="flex items-center justify-between py-5 border-b border-[#F0F0F0] last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-body text-[16px] text-primary font-medium">{val.name}</span>
                </div>
                <span className="font-body text-[14px] text-muted">{val.distance}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
