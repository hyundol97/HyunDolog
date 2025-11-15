interface AccordionProps {
    title: string;
    context: string | string[];
    onToggle: () => void;
    isOpen: boolean;
}

export default function Accordion({ title, context, onToggle, isOpen }: AccordionProps) {
    return (
        <div className="w-full rounded-xl p-3 bg-gray-300 dark:bg-stone-800 transition-all duration-200">
            <button
                type="button"
                onClick={onToggle}
                className="cursor-pointer flex w-full items-center justify-between"
            >
                <span className="font-semibold text-base">{title}</span>

                <span
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] mt-2' : 'max-h-0'}`}
            >
                {typeof context === 'string' ? (
                    <>
                        <p className="pl-6 text-sm">{context}</p>
                    </>
                ) : (
                    <>
                        {context.map(item => (
                            <p key={item} className="pl-6 text-sm">
                                {item}
                            </p>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
