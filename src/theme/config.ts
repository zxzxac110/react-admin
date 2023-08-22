import { theme } from "antd";

const themeList: { [key in Theme]: any } = {
  darkTheme: theme.darkAlgorithm(theme.defaultSeed),
  defaultTheme: theme.defaultAlgorithm(theme.defaultSeed)
}
export default themeList