<script lang="tsx">
  import { defineComponent, inject, computed } from 'vue'
  import { ElFormItem } from 'element-plus'
  import { useComponents } from '../../hooks'
  import { useContext } from '../../hooks/useContext'
  import { VUE3_FORM_PROVIDE_KEY } from '../../constant'
  import type { Vue3FormItem } from '../../types'
  import type { Ref, PropType } from 'vue'

  import './style/index.scss'

  const { get: getComponent, registerAllComponent } = useComponents()
  const formItemComponents = registerAllComponent()

  const { get } = useContext()

  export interface SchemaFormItemProps {
    schema: Vue3FormItem
  }

  export default defineComponent({
    name: 'SchemeFormItem',
    props: {
      schema: {
        type: Object as PropType<SchemaFormItemProps['schema']>,
        default: () => {}
      }
    },
    components: { ElFormItem, ...formItemComponents },
    setup(props) {
      const formModel = inject(get(VUE3_FORM_PROVIDE_KEY)) as Ref<any>

      const componentProps = computed(() => {
        const { schema } = props
        const { component, ctl = true } = schema
        const { attrs = {} } = component

        let modelValue: Record<string, any> = { modelValue: formModel.value[schema.field] }

        return { ...attrs, ...modelValue }
      })

      const RenderComponent = () => {
        const { schema } = props

        const isCustom = schema.component?.comp === 'custom'

        const Comp = isCustom
          ? schema.component?.renderComponent
          : getComponent(schema.component?.comp)

        return (
          // @ts-ignore
          <Comp
            class='vue3-form-item__component'
            {...componentProps.value}
          />
        )
      }

      const RenderItem = () => {
        return (
          <ElFormItem
            class='vue3-form-item'
            key={`${props.schema.field}`}
            prop={props.schema.field}
            label={props.schema.label}
            label-width={props.schema.labelWidth}
          >
            {RenderComponent()}
          </ElFormItem>
        )
      }

      return () => {
        return <>{RenderItem()}</>
      }
    }
  })
</script>
