declare type SortOrder = 'ascend' | 'descend' | undefined

declare type TableParams = {
  current?: number
  pageSize?: number
  order?: SortOrder
  field?: string
}



declare type TableMap = Record<string | number, string> | string[]

declare type TableMaps = Record<string, TableMap> | null

