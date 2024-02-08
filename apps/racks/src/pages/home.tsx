import { Metadata } from 'next';
import { RocketIcon } from '@radix-ui/react-icons';
import { Button } from '@racks/ui/core/components/button';
import { ScrollArea, ScrollBar } from '@racks/ui/core/components/scroll-area';
import { Separator } from '@racks/ui/core/components/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@racks/ui/core/components/tabs';
import { AlbumArtwork } from '../components/album-artwork';
import { Sidebar } from '../components/sidebar';
import { listenNowAlbums, madeForYouAlbums } from '../data/albums';
import { playlists } from '../data/playlists';
import { Playground } from '../components/playground';
import { ReactElement, useState } from 'react';
import { Layout } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Example music app using the components.',
};

enum Tab {
  Create = 'create',
  Dev = 'dev',
}

export default function Home() {
  const tab = useState<string>(Tab.Create);

  return (
    <div className="border-t border-border">
      <div className="">
        <div className="grid lg:grid-cols-5">
          <Sidebar
            playlists={playlists}
            className="sticky top-0 hidden lg:block bg-background/75"
          />
          <div className="col-span-3 lg:col-span-4 lg:border-l border-border">
            <div className="px-4 py-6 lg:px-8 h-dvh overflow-y-auto lg:pb-12">
              <Tabs value={tab[0]} onValueChange={tab[1]} className="space-y-6">
                <div className="space-between flex items-center">
                  <TabsList>
                    <TabsTrigger value={Tab.Create} className="relative">
                      Home
                    </TabsTrigger>
                    <TabsTrigger value={Tab.Dev} className="relative">
                      Dev
                    </TabsTrigger>
                  </TabsList>
                  <div className="ml-auto mr-4">
                    <Button>
                      <RocketIcon className="mr-2 h-4 w-4 mt-1" />
                      Deploy
                    </Button>
                  </div>
                </div>
                <TabsContent
                  value={Tab.Create}
                  className="border-none p-0 outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">
                        Welcome back Pat
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Jump back in where you left off.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {listenNowAlbums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[250px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                  <div className="mt-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Made for You
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your personal playlists. Updated daily.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {madeForYouAlbums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-64 h-36"
                            aspectRatio="landscape"
                            width={256}
                            height={144}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent
                  value={Tab.Dev}
                  className="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                  <Playground />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
