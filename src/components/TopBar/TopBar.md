Standard:

```tsx
import { Button } from '../';
const links = [
  { title: 'Link 1', url: '/link-1', navigate: () => {}, order: 0 },
  { title: 'Link 2', url: '/link-2', navigate: () => {}, order: 0 },
  { title: 'Link 3', url: '/link-3', navigate: () => {}, order: 0 },
];
const actions = (
  <div>
    <Button success>Action</Button>
  </div>
);
<TopBar brand="Branding" links={links} actions={actions} />;
```

Left Aligned Links:

```tsx
import { Button } from '../';
const links = [
  { title: 'Link 1', url: '/link-1', navigate: () => {}, order: 0 },
  { title: 'Link 2', url: '/link-2', navigate: () => {}, order: 0 },
  { title: 'Link 3', url: '/link-3', navigate: () => {}, order: 0 },
];
const actions = (
  <div>
    <Button success>Action</Button>
  </div>
);
<TopBar leftAlign brand="Branding" links={links} actions={actions} />;
```

Without Actions:

```tsx
import { Button } from '../';
const links = [
  { title: 'Link 1', url: '/link-1', navigate: () => {}, order: 0 },
  { title: 'Link 2', url: '/link-2', navigate: () => {}, order: 0 },
  { title: 'Link 3', url: '/link-3', navigate: () => {}, order: 0 },
];

<TopBar brand="Branding" links={links} />;
```
