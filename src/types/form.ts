declare type PageFormColumn = {
  label: string
  name: string
  placeholder?: string | [string, string]
  type: 'Input' | 'Select' | 'RangePicker'
  style?: Record<string, string | number>
  options?: Record<string, string>[]
}

declare type PageFormColumns = PageFormColumn[]