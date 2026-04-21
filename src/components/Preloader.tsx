import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

export function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="font-display italic text-[#1A1A1A] text-[72px] leading-none">
              LUMA
            </h1>
            <div className="w-[200px] h-[1px] bg-transparent relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full bg-[#C9A96E]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
