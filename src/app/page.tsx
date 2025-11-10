import CommonLottie from '@/components/CommonLottie';
import homeLottie from '@/assets/images/home_lottie.json';

export default function Home() {
  return (
    <div className="w-full max-w-6xl py-8 px-16">
      <section className="common-section flex flex-col items-center">
        <CommonLottie file={homeLottie} />
        <p className="mt-4 text-center subpixel-antialiased text-3xl text-shadow-lg/30">
          Welcome to HyunDolog!
        </p>
      </section>

      {/* <section className="common-section">
        <h2 className="text-2xl font-semibold mb-4">다음 콘텐츠 영역</h2>
        <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
      </section> */}
    </div>
  );
}
