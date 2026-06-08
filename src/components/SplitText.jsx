import { motion } from "framer-motion";

export default function SplitName({ text, className = "" }) {
  return (
    <h1 className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.8,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}