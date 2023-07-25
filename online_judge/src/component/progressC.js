import CircularProgress from '@mui/joy/CircularProgress';

import { CssVarsProvider } from '@mui/joy/styles';

export default function Progress() {
  return (
 
<CssVarsProvider defaultMode="system">
    <CircularProgress size="sm" />
</CssVarsProvider>

  );
}
