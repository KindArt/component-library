Single Selection:

```tsx padded
const options = [
  { label: 'Label 1', value: 'Value 1' },
  { label: 'Label 2', value: 'Value 2' },
  { label: 'Label 3', value: 'Value 3' },
];
<Dropdown label="Label" placeholder="Placeholder" options={options} />;
```

Multiple Selection:

```tsx
const options = [
  { label: 'Label 1', value: 'Value 1' },
  { label: 'Label 2', value: 'Value 2' },
  { label: 'Label 3', value: 'Value 3' },
];
<Dropdown multipleSelection options={options} />;
```

Error state:

```jsx
const options = [
  { label: 'Label 1', value: 'Value 1' },
  { label: 'Label 2', value: 'Value 2' },
  { label: 'Label 3', value: 'Value 3' },
];
<Dropdown label="Label" errorMessage="There is an error" options={options} />;
```

Disabled:

```tsx
const options = [
  { label: 'Label 1', value: 'Value 1' },
  { label: 'Label 2', value: 'Value 2' },
  { label: 'Label 3', value: 'Value 3' },
];
<Dropdown label="Label" options={options} disabled />;
```
