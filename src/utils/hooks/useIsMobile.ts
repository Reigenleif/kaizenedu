import { useMediaQuery } from "@chakra-ui/react";

export const useIsMobile = () => {
    const isMobile = useMediaQuery("(max-width: 968px)")[0];

    return isMobile
}