import { cn } from "@/lib/utils";
import Experience from "./Experience";

function IntroductionDrawer({
  setIsShowDrawer,
  isShowDrawer,
}: {
  setIsShowDrawer: any;
  isShowDrawer: any;
}) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 bg-black/50 p-10 transition-all duration-500",
        isShowDrawer ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-full items-stretch gap-5">
        <div className="w-2/5 rounded-md bg-white/80">
          <Experience />
          <div className="p-4">
            <p className="mb-2 text-center text-2xl">Bình gốm Kendy</p>
            <p className="mb-2">
              Di chỉ Nam Thổ Sơn (Hoà Hải, Ngũ Hành Sơn, Thành phố Đà Nẵng). Thế
              kỷ IX - XI
            </p>
          </div>
        </div>
        <div className="relative flex-1 overflow-auto rounded-md bg-white/80">
          <button className="absolute right-6 top-6 text-2xl text-black hover:text-black">
            <img
              alt="Close Button SVG Vector Icon"
              style={{
                color: "transparent",
              }}
              src="https://www.svgrepo.com/show/32011/close-button.svg"
              className="h-6 w-6 fill-current text-gray-800"
              onClick={() => setIsShowDrawer(false)}
            />
          </button>
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Bình gốm Kendy - Nghệ thuật và Tiện ích
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Bình gốm Kendy là sản phẩm thủ công tinh xảo, được làm từ gốm chất
              lượng cao. Với thiết kế độc đáo và màu sắc trang nhã, bình gốm
              Kendy không chỉ là vật dụng hữu ích mà còn là một tác phẩm nghệ
              thuật, làm tôn thêm vẻ đẹp cho không gian sống của bạn.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              Sản phẩm được nung ở nhiệt độ cao, đảm bảo độ bền và khả năng chịu
              nhiệt tốt. Bình gốm Kendy thích hợp để trang trí nội thất, làm quà
              tặng hoặc sử dụng trong các sự kiện đặc biệt.
            </p>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Quy trình sản xuất
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              Mỗi chiếc bình gốm Kendy đều trải qua một quy trình sản xuất
              nghiêm ngặt. Từ khâu chọn nguyên liệu, tạo hình, đến việc nung và
              trang trí, mọi bước đều được thực hiện bởi những nghệ nhân lành
              nghề, đảm bảo chất lượng cao nhất cho từng sản phẩm.
            </p>
            <ul className="mb-4 list-inside list-disc text-gray-600">
              <li>Chọn lọc nguyên liệu gốm tốt nhất</li>
              <li>Tạo hình thủ công tinh xảo</li>
              <li>Nung ở nhiệt độ cao</li>
              <li>Trang trí tỉ mỉ và tinh tế</li>
            </ul>
            <blockquote className="mb-4 border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "Bình gốm Kendy không chỉ là một sản phẩm, mà là cả một câu chuyện
              về nghệ thuật và tâm huyết của người làm gốm."
            </blockquote>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Ứng dụng và Bảo quản
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              Bình gốm Kendy có thể được sử dụng trong nhiều mục đích khác nhau.
              Bạn có thể dùng để cắm hoa, trưng bày, hoặc làm quà tặng cho bạn
              bè và người thân. Để sản phẩm luôn bền đẹp, bạn nên:
            </p>
            <ol className="mb-4 list-inside list-decimal text-gray-600">
              <li>Tránh va đập mạnh</li>
              <li>Không để ở nơi có nhiệt độ quá cao hoặc quá thấp</li>
              <li>Vệ sinh bằng vải mềm và nước ấm</li>
            </ol>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block rounded-md bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionDrawer;
