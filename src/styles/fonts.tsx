import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: alsans;
        font-style: italic;
        src: url("/fonts/Albert_Sans/AlbertSans-Italic-VariableFont_wght.ttf");
      }
      
      @font-face {
        font-family: ebgar;
        src: url("/fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf");
      }
      
      @font-face {
        font-family: ebgar;
        font-style: italic;
        src: url("/fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf");
      }

      @font-face{
        font-family: inter;
        src:url("/fonts/Inter/Inter-VariableFont_slnt_wght.ttf");
      }

    `}
  />
);

export default Fonts;
