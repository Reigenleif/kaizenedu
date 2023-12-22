import { FlexProps } from "@chakra-ui/react";
import { ContentCard } from "./ContentCard";

export const ExpandingCard = ({children, ...customProps}: FlexProps) => {
    return (
        <ContentCard 
            {...customProps}
            transition="all 0.2s ease-in-out"
            cursor="pointer"
            _hover={{
                transform: "scale(1.02)",
            }}
        >
            {children}
        </ContentCard>
    )
}