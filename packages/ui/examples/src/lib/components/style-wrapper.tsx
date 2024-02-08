import * as React from 'react';

import { useConfig } from '@racks/ui/hooks';
import { Style } from '@racks/ui/utils';

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: Style['name'];
}

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const [config] = useConfig();

  if (!styleName || config.style === styleName) {
    return <>{children}</>;
  }

  return null;
}
