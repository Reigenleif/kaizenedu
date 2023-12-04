import { extendTheme } from '@chakra-ui/react';
import { colors } from './component/colors';
import { Button } from './component/button';
import { Input } from './component/input';
import { Table } from './component/table';
import { Textarea } from './component/textarea';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',

    body: 'Inter'
  },
  colors,
  styles: {
    global: {
      body: {
        color: 'black',

      },
      '*': {
        '&::-webkit-scrollbar': {
          w: '2',
          h: '1.5',
        },
        
      },

    }
  },
  components: {
    Button,
    Input,
    Table,
    Textarea
  },
  breakpoints: {
    base: "0px",
    sm: "968px",
    md: "1100px",
    lg: "1200px",
    xl: "1300px",
    "2xl": "1400px",
  }
});

export default theme;
