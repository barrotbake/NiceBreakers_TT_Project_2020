import User_Join_Form from "../user-form-component/user-join-form"
import TruthLiesCard from "../truthLiesCard/truthLiesCard"
import NullScene from "../nullScene/NullScene"
import User_Join_Lobby from "../user-join-lobby-component/user-join-lobby"
import * as constants from "../../constants";

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("content", this.props.socket)
    let componentList = {
      [constants.SET_INFO]: <User_Join_Form socket={this.props.socket}/>,
      [constants.WAITING]: <User_Join_Lobby socket={this.props.socket}/>,
      [constants.TWO_TRUTHS_AND_A_LIE]: <TruthLiesCard socket={this.props.socket}/>,
    }
    const component = componentList[this.props.scene]
    if (component == null) return <NullScene />
    return (
      <div>
        {component}
      </div>
    )
  }
}
