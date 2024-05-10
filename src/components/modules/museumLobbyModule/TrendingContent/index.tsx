import { Link } from "react-router-dom";
import MuseumCard from "../components/MuseumCard";

const cardMockData = [
  {
    id: "1",
    thumbnail:
      "https://img.freepik.com/premium-photo/abstract-creative-background-using-your-project-ui-ux-design_155807-1137.jpg",
    userAvatar:
      "https://cand.com.vn/Files/Image/thuthuy/2019/10/31/ea654603-db33-4b11-8b28-bb7e101769d3.jpg",
    title: "Hello world",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    visits: 1900,
    likes: 200,
  },
  {
    id: "2",
    thumbnail:
      "https://img.freepik.com/premium-photo/abstract-creative-background-using-your-project-ui-ux-design_155807-1137.jpg",
    userAvatar:
      "https://cand.com.vn/Files/Image/thuthuy/2019/10/31/ea654603-db33-4b11-8b28-bb7e101769d3.jpg",
    title: "Charm Museum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    visits: 1900,
    likes: 200,
    isLiked: true,
  },
  {
    id: "3",
    thumbnail:
      "https://img.freepik.com/premium-photo/abstract-creative-background-using-your-project-ui-ux-design_155807-1137.jpg",
    userAvatar:
      "https://cand.com.vn/Files/Image/thuthuy/2019/10/31/ea654603-db33-4b11-8b28-bb7e101769d3.jpg",
    title: "Charm Museum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    visits: 1900,
    likes: 200,
  },
  {
    id: "4",
    thumbnail:
      "https://img.freepik.com/premium-photo/abstract-creative-background-using-your-project-ui-ux-design_155807-1137.jpg",
    userAvatar:
      "https://cand.com.vn/Files/Image/thuthuy/2019/10/31/ea654603-db33-4b11-8b28-bb7e101769d3.jpg",
    title: "Charm Museum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    visits: 1900,
    likes: 200,
  },
];

function TrendingContent() {
  return (
    <div className="grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {cardMockData.map((data) => (
        <Link to={`/museum/${data.id}`}>
          <MuseumCard
            thumbnail={data.thumbnail}
            userAvatar={data.userAvatar}
            title={data.title}
            description={data.description}
            visits={data.visits}
            likes={data.likes}
            isLiked={data.isLiked}
          />
        </Link>
      ))}
    </div>
  );
}

export default TrendingContent;
