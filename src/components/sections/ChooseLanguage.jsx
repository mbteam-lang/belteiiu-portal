import { motion } from "framer-motion";

const ChooseLanguage = ({
    languages,
    selectedLanguage,
    handleLanguageChange,
}) => {
    return (
        <div className="flex items-center bg-cyan-950/40 p-1 rounded-full border border-cyan-700/30 backdrop-blur-xl shrink-0">
            {languages.map((language) => {
                const isSelected = selectedLanguage?.code === language.code;

                return (
                    <button
                        key={language.code}
                        type="button"
                        onClick={() => handleLanguageChange(language.code)}
                        className="relative flex items-center px-2.5 py-1.5 rounded-full cursor-pointer select-none"
                    >
                        {isSelected && (
                            <motion.div
                                layoutId="language-pill"
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 shadow-md shadow-cyan-500/30"
                                transition={{
                                    type: "spring",
                                    stiffness: 450,
                                    damping: 35,
                                }}
                            />
                        )}

                        <motion.img
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                scale: isSelected ? 1.05 : 1,
                                rotate: isSelected ? 4 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                            src={language.icon}
                            alt={language.name}
                            className="relative z-10 w-5 h-5 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] rounded-full object-cover shrink-0"
                        />

                        <motion.span
                            initial={false}
                            animate={{
                                width: isSelected ? "auto" : 0,
                                opacity: isSelected ? 1 : 0,
                                marginLeft: isSelected ? 6 : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="relative z-10 overflow-hidden whitespace-nowrap text-white font-medium text-xs xl:text-sm"
                        >
                            {language.name}
                        </motion.span>
                    </button>
                );
            })}
        </div>
    );
};

export default ChooseLanguage;