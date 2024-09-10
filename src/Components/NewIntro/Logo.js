// import logo1 from '../../assets/Group 1.svg';
import peach from '../../assets/Group-3.svg'
import green from '../../assets/Group-4.svg'
import purple from '../../assets/Group-5.svg'
import cyan from '../../assets/Group-6.svg'
import orange from '../../assets/Group-7.svg'
import pink from '../../assets/Group-1.svg'
import light_green from '../../assets/Group-2.svg'
import yellow from '../../assets/Group-8.svg'
import styles from './Logo.module.css'
import { useStateValue } from '../../StateProvider'

const Logo = () => {
    const [{ globalCount }] = useStateValue()

    const colors = [
        yellow,
        pink,
        light_green,
        peach,
        green,
        purple,
        cyan,
        orange,
    ]
    return (
        <div className={styles.logo}>
            <img style={{width:'4.688rem', height:'auto', margin:'auto'}} src={colors[globalCount]} alt="" />
        </div>
    )
}

export default Logo
