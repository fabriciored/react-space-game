import './style.scss'

import InventoryModal from '../InventoryModal';
import MapModal from '../MapModal';

export default function ActionBar() {
  return(
    
    <div className="action">

      <InventoryModal />
      <MapModal/>
      
    </div>
  )
}