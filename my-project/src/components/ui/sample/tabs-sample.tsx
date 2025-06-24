import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CardSample } from "@/components/ui/sample/card-sample";

export function TabsSample() {
  return (
    <Tabs defaultValue="shopping" className="w-full">
      <TabsList>
        <TabsTrigger value="shopping">쇼핑</TabsTrigger>
        <TabsTrigger value="food">식음</TabsTrigger>
        <TabsTrigger value="cinema">영화관</TabsTrigger>
      </TabsList>

      <TabsContent value="shopping">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardSample />
          <CardSample />
        </div>
      </TabsContent>

      <TabsContent value="food">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardSample />
        </div>
      </TabsContent>

      <TabsContent value="cinema">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardSample />
        </div>
      </TabsContent>
    </Tabs>
  );
}
