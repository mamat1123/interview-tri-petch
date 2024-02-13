import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export type ImageVariant = {
  url: string;
  cssHelper: string;
};

export type ArticleSection = {
  title: string;
  detail: string;
  textColor: string;
  bgColor: string;
  lineColor: string;
};

export type Article = {
  title: string;
  position: string;
  image: {
    desktop: ImageVariant;
    tablet: ImageVariant;
    mobile: ImageVariant;
  };
  section: ArticleSection[];
};

export type ArticleSectionProps = {
  articleList: Article[];
};

function ArticleSection(props: ArticleSectionProps) {
  const { articleList } = props;
  return (
    <>
      <div className="overflow-hidden">
        {articleList.map((article, index) => {
          return (
            <>
              <div className="w-full relative md:items-end md:pt-[100px] sm:pt-[20px] flex flex-col">
                <h2
                  key={index}
                  className={`md:text-8xl sm:text-5xl text-tri-gray-dark sm:w-full md:px-0 sm:px-[20px] ${
                    article.position === "right"
                      ? "lg:w-1/2 md:w-[62%]"
                      : "lg:w-[85%] md:w-[98%]"
                  }`}
                >
                  {article.title}
                </h2>

                <div
                  className={`absolute ${
                    article.position === "right"
                      ? "lg:top-[55px] md:top-[80px] lg:right-2/4 md:left-0 sm:left-0 sm:top-[110px] sm:justify-center md:flex md:w-auto sm:flex sm:w-full sm:z-10"
                      : "lg:top-[0px] lg:left-[44%] lg:w-full lg:block md:top-[50px] md:left-[33%] md:flex md:w-full sm:left-0 sm:top-[110px] sm:flex sm:w-full sm:z-10 sm:justify-center"
                  }`}
                >
                  <img
                    className={`${article.image.desktop.cssHelper} lg:block hidden`}
                    src={article.image.desktop.url}
                  ></img>
                  <img
                    className={`${article.image.tablet.cssHelper} md:block lg:hidden sm:hidden`}
                    src={article.image.tablet.url}
                  ></img>
                  <img
                    className={`${article.image.mobile.cssHelper} sm:block md:hidden lg:hidden`}
                    src={article.image.mobile.url}
                  ></img>
                </div>

                <div className="md:flex lg:flex flex-col w-full sm:hidden">
                  {article.section.map((sectionItem, index) => {
                    return (
                      <>
                        <div
                          key={`section-` + index}
                          className={`flex flex-col lg:py-[60px] md:py-[30px] gap- px-4 items-end ${sectionItem.bgColor}`}
                        >
                          <div
                            className={
                              article.position === "right"
                                ? "lg:w-1/2 md:w-[62%]"
                                : "lg:w-[85%] md:w-[98%]"
                            }
                          >
                            <div className="flex flex-row gap-[10px] items-center mb-[20px]">
                              <div className="flex flex-col">
                                <p>0{index + 1}</p>
                                <div
                                  className={`h-[5px] w-full rounded-lg ${sectionItem.lineColor}`}
                                ></div>
                              </div>
                              <h3 className="text-4xl text-tri-gray">
                                {sectionItem.title}
                              </h3>
                            </div>
                            <p
                              className={`lg:max-w-[717px] md:max-w-[447px] lg:text-xl md:text-md ${sectionItem.textColor}`}
                            >
                              {sectionItem.detail}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="relative sm:block md:hidden lg:hidden pt-[230px]">
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="bg-tri-gray-bg"
                  >
                    {article.section.map((sectionItem, index) => {
                      return (
                        <>
                          <SwiperSlide
                            key={index}
                            className=" py-[60px] px-[20px]"
                          >
                            <div className="flex flex-col gap-[10px]">
                              <div className="flex flex-row gap-[10px] items-center">
                                <div className="flex flex-col">
                                  <p>0{index + 1}</p>
                                  <div className=" h-[5px] w-full bg-tri-purple-line rounded-lg"></div>
                                </div>
                                <h3 className="text-2xl text-tri-gray">
                                  {sectionItem.title}
                                </h3>
                              </div>
                              <p className="text-tri-back text-left text-sm">
                                {sectionItem.detail}
                              </p>
                            </div>
                          </SwiperSlide>
                        </>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ArticleSection;
