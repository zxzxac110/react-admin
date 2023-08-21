declare type SortOrder = 'ascend' | 'descend' | undefined

declare type TableParams = {
  current?: number
  pageSize?: number
  order?: SortOrder
  field?: string
}

