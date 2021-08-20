import ActionBar from '../../components/ActionBar'
import Grid from '../../components/Grid'
import GridMap from '../../components/GridMap'
import './style.scss'

export default function Main() {
  return(
    <div className="main">
      <GridMap/>
      <ActionBar/>
    </div>
  )
}
