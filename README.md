**Material-UI theme does not work in Storybook**

1. Install
  ```
  yarn install
  ```
2. Run

    a. CRA
      ```
      yarn react-scripts start
      ```
    b. Storybook
      ```
      yarn start-storybook
      ```

## Component

```jsx
import React from 'react'
import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export function ThemedButton() {
    return (
        <ThemeProvider theme={createTheme({ palette: { primary: { main: '#f00' } } })}>
            <Button variant="contained" color="primary">foo</Button>
        </ThemeProvider>
    )
}
```

## Result

In CRA | In Storybook
-- | --
![image](https://user-images.githubusercontent.com/39068198/137137981-8bb0fec9-b143-424c-9e5d-3e62bad9bf80.png) | ![image](https://user-images.githubusercontent.com/39068198/137138043-8cfdd94a-8029-47b3-9501-5251a2e0dff4.png)
