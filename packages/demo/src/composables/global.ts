export const isDark = useDark()

export const toggleTheme = useToggle(isDark) as (
  val: string | number | boolean
) => any

export const isCollapsed = ref<boolean>(false)
