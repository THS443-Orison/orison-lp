import Hero from "@/components/Hero";
import CtaButton from "@/components/CtaButton";
import CtaButton2 from "@/components/CtaButton2";
import SubTitle from "@/components/SubTitle";
import Image from "next/image";
import crane from "@/assets/images/crane.svg";
import Step from "@/components/Step";
import Footer from "@/components/Footer";
import triangle5 from "@/assets/images/triangle-5.svg";
import triangle6 from "@/assets/images/triangle-6.svg";
import Feature from "@/assets/images/feature.png";

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg">
      <div className="w-full max-w-[400px] sm:shadow-md sm:shadow-gray-500">
        <div className="bg-white">
          <Hero />
        </div>
        <CtaButton />
        <div className="section mx-5 mt-10">
          <SubTitle
            imageNum_a={1}
            imageNum_b={2}
            positionR="mt-10"
            positionL="-mt-10"
            section="ABOUT"
            title="ORISONとは"
          />
          <div className="text-center text-gray-800 text-xs mt-3 mx-10 leading-5">
            <p>
              <span className="block">
                オリゾンは建物すべてが折り紙でできている町、我々が考えた未来都市です。
              </span>

              <span className="block mt-4">
                「Orison」は「祈り」を意味し、
                <br />
                その響きに「折り紙を折る」という日本語の漢字と音を掛けています。
              </span>

              <span className="block mt-4">
                折り紙には祈祷の意味が込められており、さらに紙を折る所作は両手を合わせる合掌、つまり祈りの所作とも通づるものです。
              </span>

              <span className="block mt-4">
                祈りとはこの先起こる事柄に対する行為で、
                <br />
                その行為自体が未来を示唆しており、私たちの手で折る折り紙が織りなす未来。
                <br />
                故にその手で祈る新世界なのです。
              </span>
            </p>
            <div className="mx-auto flex justify-center mt-5">
              <Image src={crane} alt="Crane Image" />
            </div>
          </div>
        </div>
        <div className="section mx-5 mt-16 relative">
          <Image
            src={triangle5}
            alt="Triangle5 Image"
            className="absolute right-0 top-1/2 mt-[-120px]"
          />
          <Image
            src={triangle6}
            alt="Triangle5 Image"
            className="absolute left-0 top-3/4 mt-[-70px]"
          />
          <SubTitle
            imageNum_a={3}
            imageNum_b={4}
            positionR="-mt-20"
            positionL="mt-10"
            title={`折り紙で織りなす<br/>未来都市`}
          />
          <div className="text-center text-gray-800 text-sm  mx-10 leading-5 mb-8 mt-[-24px]">
            <p>未来都市『ORISON』を体験てよみよう</p>
          </div>
          <Step stepNumber={1} title="折り紙を折る" desc="折り紙を折る" />
          <Step
            stepNumber={2}
            title="アプリで読み込む"
            desc="作った折り紙を読み込もう！"
          />
          <Step
            stepNumber={3}
            title="町に配置する"
            desc="好きな位置に置いてみよう！"
          />
        </div>
        <div className="future mx-5 mt-16 mb-16">
          <SubTitle
            positionR="mt-5"
            positionL="mt-5"
            imageNum_a={5}
            imageNum_b={5}
            title="50年後の未来"
            section="FUTURE"
          />
          <div className="text-center text-gray-800 text-xs mt-8 mx-5 leading-5">
            <p>
              私たちの願う「50年後の未来は」・・・
              <br />
              家を立て替える必要がなく、コストを抑えることができる
              再利用のできる住宅で
              <br />
              災害が起こった際に誰に活用できる仮設住宅が提供されることです
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Image src={Feature} alt="未来の都市" />
          </div>
          <p className="text-center text-gray-800 text-xs mt-4 mx-5 leading-5">
            そして、持続可能な社会につながっていくのです
          </p>
        </div>
        <CtaButton2 />
        <hr className="mx-10 mt-20 border-gray-300" />
        <Footer />
      </div>
    </div>
  );
}
