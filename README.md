# Dank Design System

a design system created for use with react!

# Features

- [ ] App wrapper insta-app™ component!
- [ ] runtime-configurable css variables!
- [ ] intuitive layout components!
- [ ] Markdown viewifier!
- [ ] auth context!
- [ ] api boilerplate!
- [ ] useful hooks!

# Development

```bash
$ git clone [this]
$ npm i
$ npm run storybook
```

# Usage

```bash
# go to any react app you have made
$ npm i @dank-inc/dank-design
```

import components to use in your app!

```tsx
import { Button } from '@dank-inc/dank-design

export const App = () => {
  const title = "App Title"

  return (
    <div>
      <h1>{title}</h1>
      <Button>Click Meh!</Button>
    </div>
  )
}
```
