<script lang="tsx">
  import { defineComponent, inject, computed } from 'vue'
  import { ElFormItem } from 'element-plus'
  import { useComponents } from '../../hooks'
  import { useContext } from '../../hooks/useContext'
  import { VUE3_FORM_PROVIDE_KEY } from '../../constant'
  import { initDefaultValue } from '../../utils'
  import { upperFirstLetter } from '../../utils/common'
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

      /**
       * @desc 格式化actions
       **/
      function formatActions(actions: Record<string, any>) {
        return Reflect.ownKeys(actions).reduce<Record<string, any>>((acc, key) => {
          const action = actions[key as string]
          acc[`on${upperFirstLetter(key as string)}`] = action
          return acc
        }, {})
      }

      /**
       * @desc 初始化受控函数
       */
      function initCtlAction(ctl: boolean) {
        const { schema } = props
        const { updateModelValue, component } = schema

        const updateEvent: Record<string, any> = {}

        updateEvent['onUpdate:modelValue'] = ctl
          ? function (val: any) {
              formModel.value[schema.field] = val
            }
          : updateModelValue

        return updateEvent
      }

      const componentProps = computed(() => {
        const { schema } = props
        const { component, ctl = true } = schema
        const { attrs = {}, actions = {}, ...rest } = component

        formModel.value[schema.field] ??= initDefaultValue(schema)

        const modelValue: Record<string, any> = {
          modelValue: formModel.value[schema.field]
        }

        const on = { ...initCtlAction(ctl), ...formatActions(actions) }

        return { ...attrs, ...on, ...modelValue, ...rest }
      })

      const RenderComponent = () => {
        const { schema } = props

        const isCustom = schema.component?.comp === 'custom' || false

        const Comp = isCustom ? schema.component?.renderComponent : getComponent(schema.component?.comp)

        console.log('componentProps  :>>', componentProps.value)

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
