import { createPluginFactory, PlateEditor, Value } from '@udecode/plate-common';

import { useHooksToggle } from './hooks/useHooksToggle';
import { injectToggle } from './injectToggle';
import { ToggleControllerProvider } from './store';
import { ELEMENT_TOGGLE, TogglePlugin } from './types';
import { withToggle } from './withToggle';

export const createTogglePlugin = createPluginFactory<
  TogglePlugin,
  Value,
  PlateEditor<Value>
>({
  key: ELEMENT_TOGGLE,
  isElement: true,
  useHooks: useHooksToggle,
  renderAboveEditable: ToggleControllerProvider,
  inject: {
    aboveComponent: injectToggle,
  },
  withOverrides: withToggle,
});
