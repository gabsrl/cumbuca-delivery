
import { extendTheme } from "@chakra-ui/react";
import { THEMING_COLORS } from "./foundations/colors";

const override = extendTheme({
    colors: {
        ...THEMING_COLORS,
    }
})

export default override;