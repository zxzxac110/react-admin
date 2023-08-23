import { Form } from 'antd'
import type { FormInstance } from 'antd'
import { useEffect, useMemo } from 'react'
import GenFromElement from '@/components/form/element'
interface PageFormProps {
  handleInstance: (form: FormInstance) => void
  columns: PageFormColumns
  formItemProps?: Record<string, any>
  props?: Record<string, any>
}

function PageForm(props: PageFormProps) {
  const [formInstance] = Form.useForm()

  useEffect(() => {
    if (formInstance && typeof props.handleInstance === 'function') {
      props.handleInstance(formInstance)
    }
  }, [formInstance, props.handleInstance])

  const formBody = useMemo(() => {
    return (
      props.columns?.map((e: PageFormColumn) => {
        return (
          <Form.Item label={e.label} name={e.name} {...e.formItemProps}>
            {GenFromElement(e)}
          </Form.Item>
        )
      }) || []
    )
  }, [props.columns])

  return (
    <Form form={formInstance} {...props.props}>
      {...formBody}
    </Form>
  )
}

export default PageForm
