interface IProps {
  id: string
  label: string
  children: any
}

const CollapseSectionComponent = (props: IProps) => (
  <>
    <input type="checkbox" id={props.id} aria-hidden="true" />
    <label htmlFor={props.id} aria-hidden="true">{props.label}</label>
    <div>
      {props.children}
    </div>
  </>
)

export default CollapseSectionComponent;