import styles from './styles.module.scss'
import {AiOutlineCheck} from 'react-icons/ai'
export default function Button() {
  
  return (
    <div>
        <button
        className={styles.btn}
        type="submit"
        onClick = {handleSubmit}
        ><AiOutlineCheck size='1.5rem' color='white'/>
        </button>
        
    </div>
  )
}
