import * as React from 'react';
import Link from 'next/link';

import { cn } from '@racks/ui/utils';
import AccordionDemo from '@racks/ui/examples/lib/accordion-demo';
import AlertDialogDemo from '@racks/ui/examples/lib/alert-dialog-demo';
import AspectRatioDemo from '@racks/ui/examples/lib/aspect-ratio-demo';
import AvatarDemo from '@racks/ui/examples/lib/avatar-demo';
import BadgeDemo from '@racks/ui/examples/lib/badge-demo';
import BadgeDestructive from '@racks/ui/examples/lib/badge-destructive';
import BadgeOutline from '@racks/ui/examples/lib/badge-outline';
import BadgeSecondary from '@racks/ui/examples/lib/badge-secondary';
import ButtonDemo from '@racks/ui/examples/lib/button-demo';
import ButtonDestructive from '@racks/ui/examples/lib/button-destructive';
import ButtonGhost from '@racks/ui/examples/lib/button-ghost';
import ButtonLink from '@racks/ui/examples/lib/button-link';
import ButtonLoading from '@racks/ui/examples/lib/button-loading';
import ButtonOutline from '@racks/ui/examples/lib/button-outline';
import ButtonSecondary from '@racks/ui/examples/lib/button-secondary';
import ButtonWithIcon from '@racks/ui/examples/lib/button-with-icon';
import CardDemo from '@racks/ui/examples/lib/card-demo';
import CheckboxDemo from '@racks/ui/examples/lib/checkbox-demo';
import CollapsibleDemo from '@racks/ui/examples/lib/collapsible-demo';
import CommandDemo from '@racks/ui/examples/lib/command-demo';
import ContextMenuDemo from '@racks/ui/examples/lib/context-menu-demo';
import DatePickerDemo from '@racks/ui/examples/lib/date-picker-demo';
import DialogDemo from '@racks/ui/examples/lib/dialog-demo';
import DropdownMenuDemo from '@racks/ui/examples/lib/dropdown-menu-demo';
import HoverCardDemo from '@racks/ui/examples/lib/hover-card-demo';
import MenubarDemo from '@racks/ui/examples/lib/menubar-demo';
import NavigationMenuDemo from '@racks/ui/examples/lib/navigation-menu-demo';
import PopoverDemo from '@racks/ui/examples/lib/popover-demo';
import ProgressDemo from '@racks/ui/examples/lib/progress-demo';
import RadioGroupDemo from '@racks/ui/examples/lib/radio-group-demo';
import ScrollAreaDemo from '@racks/ui/examples/lib/scroll-area-demo';
import SelectDemo from '@racks/ui/examples/lib/select-demo';
import SeparatorDemo from '@racks/ui/examples/lib/separator-demo';
import SheetDemo from '@racks/ui/examples/lib/sheet-demo';
import SkeletonDemo from '@racks/ui/examples/lib/skeleton-demo';
import SliderDemo from '@racks/ui/examples/lib/slider-demo';
import SwitchDemo from '@racks/ui/examples/lib/switch-demo';
import TabsDemo from '@racks/ui/examples/lib/tabs-demo';
import ToastDemo from '@racks/ui/examples/lib/toast-demo';
import ToggleDemo from '@racks/ui/examples/lib/toggle-demo';
import ToggleDisabled from '@racks/ui/examples/lib/toggle-disabled';
import ToggleOutline from '@racks/ui/examples/lib/toggle-outline';
import ToggleWithText from '@racks/ui/examples/lib/toggle-with-text';
import TooltipDemo from '@racks/ui/examples/lib/tooltip-demo';
import { Button } from '@racks/ui/core/components/button';

export default function KitchenSinkPage() {
  return (
    <div className="container">
      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="grid gap-4">
            <ComponentWrapper>
              <CardDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper>
              <SliderDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper
              className="spa flex-col items-start space-x-0
				space-y-2"
            >
              <p className="text-sm text-muted-foreground">Documentation</p>
              <p className="text-sm font-medium leading-none">
                You can customize the theme using{' '}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">
                  CSS variables
                </code>
                .{' '}
                <Link
                  href="#"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Click here
                </Link>{' '}
                to learn more.
              </p>
            </ComponentWrapper>
            <ComponentWrapper>
              <CheckboxDemo />
              <HoverCardDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <TabsDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <MenubarDemo />
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
              <div className="flex space-x-2">
                <ButtonDemo />
                <ButtonSecondary />
                <ButtonDestructive />
              </div>
              <div className="flex space-x-2">
                <ButtonOutline />
                <ButtonLink />
                <ButtonGhost />
              </div>
              <div className="flex space-x-2">
                <ButtonWithIcon />
                <ButtonLoading />
              </div>
              <div className="flex space-x-2">
                <Button size="lg">Large</Button>
                <Button size="sm">Small</Button>
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <DatePickerDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&_ul>li:last-child]:hidden">
              <NavigationMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper className="justify-between">
              <SwitchDemo />
              <SelectDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <SeparatorDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <AspectRatioDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <PopoverDemo />
              <ToastDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <TooltipDemo />
              <SheetDemo />
              <ProgressDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <CommandDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
              <RadioGroupDemo />
              <ContextMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <DropdownMenuDemo />
                <AlertDialogDemo />
                <DialogDemo />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <BadgeDemo />
                <BadgeSecondary />
                <BadgeDestructive />
                <BadgeOutline />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <SkeletonDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <CollapsibleDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <ToggleDemo />
                <ToggleOutline />
                <ToggleDisabled />
                <ToggleWithText />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <ScrollAreaDemo />
            </ComponentWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentWrapper({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between space-x-4 rounded-md p-4',
        className
      )}
    >
      {children}
    </div>
  );
}
