import { Component } from 'vue'

export interface DatePickerEmits {
  /**
   * @desc 用户确认选定的值时触发
   * @memberof DatePickerEmits
   */
  change: (val: string | number) => void
  /**
   * @desc 在组件 Input 失去焦点时触发
   * @memberof DatePickerEmits
   */
  blur: (e: FocusEvent) => void
  /**
   * @desc 	在组件 Input 获得焦点时触发
   * @memberof DatePickerEmits
   */
  focus: (e: FocusEvent) => void
  /**
   * @desc 	当日历所选的日期更改时触发。 仅适用于 daterange
   * @memberof DatePickerEmits
   */
  calendarChange: (val: [Date, Date]) => void
  /**
   * @desc 	当日期面板改变时触发
   * @memberof DatePickerEmits
   */
  panelChange: (data: any, mode: string, view: any) => void
  /**
   * @desc 	当 DatePicker 的下拉列表出现/消失时触发
   * @memberof DatePickerEmits
   */
  visibleChange: (visibility: boolean) => void
}

export interface SelectProps {
  /**
   * @desc 选中项绑定值
   * @type {string}
   * @memberof SelectProps
   */
  modelValue: string | number | boolean | Array<string | number | boolean | object> | object
  /**
   * @desc 是否多选
   * @type {boolean}
   * @memberof SelectProps
   */
  multiple: boolean
  /**
   * @desc 是否禁用
   * @type {boolean}
   * @memberof SelectProps
   */
  disabled: boolean
  /**
   * @desc 作为 value 唯一标识的键名，绑定值为对象类型时必填
   * @type {string}
   * @memberof SelectProps
   */
  valueKey: string
  /**
   * @desc 输入框尺寸
   * @type {('large' | 'default' | 'small')}
   * @memberof SelectProps
   */
  size: 'large' | 'default' | 'small'
  /**
   * @desc 	是否可以清空选项
   * @type {boolean}
   * @memberof SelectProps
   */
  clearable: boolean
  /**
   * @desc 多选时是否将选中值按文字的形式展示
   * @type {boolean}
   * @memberof SelectProps
   */
  collapseTags: boolean
  /**
   * @desc 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true
   * @type {boolean}
   * @memberof SelectProps
   */
  collapseTagsTooltip: boolean
  /**
   * @desc multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制
   * @type {number}
   * @memberof SelectProps
   */
  multipleLimit: number
  /**
   * @desc Select 输入框的原生 name 属性
   * @type {string}
   * @memberof SelectProps
   */
  name: string
  /**
   * @desc Tooltip 主题，内置了 dark / light 两种
   * @type {('dark' | 'light')}
   * @memberof SelectProps
   */
  effect: 'dark' | 'light'
  /**
   * @desc Select 输入框的原生 autocomplete 属性
   * @type {('on' | 'off')}
   * @memberof SelectProps
   */
  autocomplete: 'on' | 'off'
  /**
   * @desc 占位文字
   * @type {string}
   * @memberof SelectProps
   */
  placeholder: string
  /**
   * @desc Select 组件是否可筛选
   * @type {boolean}
   * @memberof SelectProps
   */
  filterable: boolean
  /**
   * @desc 是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效
   * @type {boolean}
   * @memberof SelectProps
   */
  allowCreate: boolean
  /**
   * @desc 自定义筛选方法
   * @memberof SelectProps
   */
  filterMethod: (val: string | number) => void
  /**
   * @desc 其中的选项是否从服务器远程加载
   * @type {boolean}
   * @memberof SelectProps
   */
  remote: boolean
  /**
   * @desc 自定义远程搜索方法
   * @memberof SelectProps
   */
  remoteMethod: (val: string | number) => void
  /**
   * @desc 远程搜索方法显示后缀图标
   * @type {boolean}
   * @memberof SelectProps
   */
  remoteShowSuffix: boolean
  /**
   * @desc 是否正在从远程获取数据
   * @type {boolean}
   * @memberof SelectProps
   */
  loading: boolean
  /**
   * @desc 从服务器加载内容时显示的文本
   * @type {string}
   * @memberof SelectProps
   */
  loadingText: string
  /**
   * @desc 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置
   * @type {string}
   * @memberof SelectProps
   */
  noMatchText: string
  /**
   * @desc 无选项时显示的文字，也可以使用 empty 插槽设置自定义内容
   * @type {string}
   * @memberof SelectProps
   */
  noDataText: string
  /**
   * @desc 选择器下拉菜单的自定义类名
   * @type {string}
   * @memberof SelectProps
   */
  popperClass: string
  /**
   * @desc 当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词
   * @type {boolean}
   * @memberof SelectProps
   */
  reserveKeyword: boolean
  /**
   * @desc 是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用
   * @type {boolean}
   * @memberof SelectProps
   */
  defaultFirstOption: boolean
  /**
   * @desc 是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false
   * @type {boolean}
   * @memberof SelectProps
   */
  popperAppendToBody: boolean
  /**
   * @desc 该下拉菜单是否使用teleport插入body元素
   * @type {boolean}
   * @memberof SelectProps
   */
  teleported: boolean
  /**
   * @desc 当下拉选择器未被激活并且persistent设置为false，选择器会被删除
   * @type {boolean}
   * @memberof SelectProps
   */
  persistent: boolean
  /**
   * @desc 对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单
   * @type {boolean}
   * @memberof SelectProps
   */
  automaticDropdown: boolean
  /**
   * @desc 	自定义清除图标
   * @type {(string | Component)}
   * @memberof SelectProps
   */
  clearIcon: string | Component
  /**
   * @desc 下拉框的宽度是否与输入框相同
   * @type {boolean}
   * @memberof SelectProps
   */
  fitInputWidth: boolean
  /**
   * @desc 自定义后缀图标组件
   * @type {(string | Component)}
   * @memberof SelectProps
   */
  suffixIcon: string | Component
  /**
   * @desc 下拉菜单显示/消失时后缀图标的动画
   * @type {boolean}
   * @memberof SelectProps
   */
  suffixTransition: boolean
  /**
   * @desc 标签类型
   * @type {(success | info | warning | danger)}
   * @memberof SelectProps
   */
  tagType: 'success' | 'info' | 'warning' | 'danger'
  /**
   * @desc 是否触发表单验证
   * @type {boolean}
   * @memberof SelectProps
   */
  validateEvent: boolean
  /**
   * @desc 	下拉框出现的位置
   * @type {(top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end)}
   * @memberof SelectProps
   */
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  /**
   * @desc 需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效
   * @type {number}
   * @memberof SelectProps
   */
  maxCollapseTags: number
}

export interface SelectEmits {
  /**
   * @desc 选中值发生变化时触发
   * @memberof SelectEmits
   */
  change: (val: any) => void
  /**
   * @desc 下拉框出现/隐藏时触发
   * @memberof SelectEmits
   */
  visibleChange: (val: boolean) => void
  /**
   * @desc 多选模式下移除tag时触发
   * @memberof SelectEmits
   */
  removeTag: (val: any) => void
  /**
   * @desc 可清空的单选模式下用户点击清空按钮时触发
   * @memberof SelectEmits
   */
  clear: () => void
  /**
   * @desc 当 input 失去焦点时触发
   * @memberof SelectEmits
   */
  blur: (event: FocusEvent) => void
  /**
   * @desc 当 input 获得焦点时触发
   * @memberof SelectEmits
   */
  focus: (event: FocusEvent) => void
}

export interface SelectOptionsGroupProps {
  /**
   * @desc 分组的组名
   * @type {string}
   * @memberof SelectOptionsGroupProps
   */
  label: string
  /**
   * @desc 是否将该分组下所有选项置为禁用
   * @default false
   * @type {boolean}
   * @memberof SelectOptionsGroupProps
   */
  disabled?: boolean
  /**
   * @desc 选项配置
   * @type {SelectOptionsProps[]}
   * @memberof SelectOptionsGroupProps
   */
  options: SelectOptionsProps[]
}

export interface SelectOptionsProps {
  /**
   * @desc 选项的值
   * @type {(string | number | boolean | object)}
   * @memberof SelectOptionsProps
   */
  value: string | number | boolean | object
  /**
   * @desc 选项的标签，若不设置则默认与value相同
   * @type {(string | number)}
   * @memberof SelectOptionsProps
   */
  label: string | number
  /**
   * @desc 是否禁用该选项
   * @default false
   * @type {boolean}
   * @memberof SelectOptionsProps
   */
  disabled?: boolean
}

export type GetInstance<T = Component> = {
  afterLoaded?: (instance: T) => void
}
