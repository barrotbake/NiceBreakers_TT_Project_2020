import User_Join_Form from "../user-form-component/user-join-form"
import TruthLiesCard from "../truthLiesCard/truthLiesCard"
import NullScene from "../nullScene/NullScene"

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.componentList = {
      "Set Info": <User_Join_Form />,
      "Waiting": null,
      "Two Truths and a Lie": <TruthLiesCard />,
    }
  }
  render() {
    const component = this.componentList[this.props.scene]
    if (component == null) return <NullScene />
    return (
      <div>
        {component}
      </div>
    )
  }
}
