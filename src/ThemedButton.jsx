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
