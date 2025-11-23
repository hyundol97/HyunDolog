export default function HomeQuote() {
    return (
        <div className="relative p-6 md:p-12 border rounded-xl shadow-sm">
            <span className="absolute -top-7 left-6 md:left-12 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full bg-stone-800 text-white dark:bg-white dark:text-stone-800">
                오늘의 명언
            </span>

            <div className="grid gap-y-3">
                <span className="text-lg md:text-2xl p-1">
                    <p className="italic text-stone-500 text-sm md:text-base">
                        子曰 知之者不如好之者 好之者不如樂之者
                    </p>
                    <p className="text-base md:text-xl">
                        "공자께서 말씀하셨다. 아는 자는 좋아하는 자만 못하고, 좋아하는 자는 즐기는
                        자만 못하다."
                    </p>
                    <p className="text-sm md:text-lg">(공자『논어』中)</p>
                </span>

                <span className="text-lg md:text-2xl p-1">
                    <p className="italic text-stone-500 text-sm md:text-base">
                        Try not to become a man of success but rather to become a man of value.
                    </p>
                    <p className="text-base md:text-xl">
                        "성공한 사람보다는 가치 있는 사람이 되라."
                    </p>
                    <p className="text-sm md:text-lg">(알버트 아인슈타인)</p>
                </span>

                <span className="text-lg md:text-2xl p-1">
                    <p className="italic text-stone-500 text-sm md:text-base">
                        Everyone thinks of changing the world, but no one thinks of changing
                        himself.
                    </p>
                    <p className="text-base md:text-xl">
                        "모두가 세상을 변화시키려고 생각하지만, 정작 스스로 변하겠다고 생각하는
                        사람은 없다."
                    </p>
                    <p className="text-sm md:text-lg">(레프 톨스토이)</p>
                </span>
            </div>
        </div>
    );
}
