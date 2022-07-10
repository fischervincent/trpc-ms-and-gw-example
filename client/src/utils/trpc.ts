import { createReactQueryHooks } from '@trpc/react';
import type { GwRouter } from 'gw';

export const trpc = createReactQueryHooks<GwRouter>();
