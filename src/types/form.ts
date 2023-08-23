declare type PageFormColumn = {
  label: string
  name: string
  placeholder?: string | [string, string]
  type: 'children' | 'Input' | 'Select' | 'RangePicker' | 'InputNumber'
  style?: Record<string, string | number>
  options?: Record<string, string>[]
  formItemProps?: Record<string, any> // formItem的Props
  props?: Record<string, any> // antui相对于的表单元素
  children?: any // 自定义表单元素
}
declare type BtnProps = {
  text: string,
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined,
  click: (v?: any) => void
}

declare type FormDialog = {
  open: (v?: Record<string, any>, type?: FromDialogType) => void
}

declare type FromDialogType = 'add' | 'edit' | 'look' | string
declare type BtnsProps = BtnProps[]
declare type PageFormColumns = PageFormColumn[]