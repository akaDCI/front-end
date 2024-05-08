import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type MuseumCardProps = {
  thumbnail: string;
  userAvatar: string;
  title: string;
  description: string;
  visits: number;
  likes: number;
  isLiked?: boolean;
};
export default function MuseumCard(props: MuseumCardProps) {
  console.log(props);
  return (
    <Card className="p-4 cursor-pointer hover:shadow-xl transition">
      <AspectRatio ratio={16 / 9}>
        <img
          src={props.thumbnail}
          alt="thumbnail"
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <div className="mt-4 flex">
        <img
          src={props.userAvatar}
          alt="user-avatar"
          className="rounded-full w-[2.5rem] h-[2.5rem] object-cover mr-3"
        />
        <div className="flex flex-col gap-1 flex-1">
          <h4 className="font-semibold">{props.title}</h4>
          <p className="text-sm">{props.description}</p>
          <div className="flex text-gray-400 text-sm flex gap-2">
            <div>{props.visits} visits</div>•<div>{props.likes} likes</div>
          </div>
        </div>
        <Button variant="outline" size="icon">
          {props.isLiked ? (
            <HeartFilledIcon className="h-4 w-4 text-red-600" />
          ) : (
            <HeartIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </Card>
  );
}
