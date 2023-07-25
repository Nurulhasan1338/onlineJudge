import LinearProgress from '@mui/joy/LinearProgress';

import { CssVarsProvider } from '@mui/joy/styles';

export default function Progress() {
  return (
 
   <CssVarsProvider defaultMode="system">

    <LinearProgress variant="plain" value={39} size="lg" />
   </CssVarsProvider>

  );
}
