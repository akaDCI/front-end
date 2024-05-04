import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TrendingContent from "../TrendingContent";
import RecentContent from "../RecentContent";

function MuseumLobbyModule() {
  return (
    <section className="h-full bg-slate-50 p-10">
      <Tabs defaultValue="trending" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        <TabsContent value="trending">
          <TrendingContent />
        </TabsContent>
        <TabsContent value="recent">
          <RecentContent />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default MuseumLobbyModule;
