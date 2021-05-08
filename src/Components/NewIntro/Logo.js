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

const Logo = ({ color }) => {
    const colors = [
        orange,
        yellow,
        pink,
        light_green,
        peach,
        green,
        purple,
        cyan,
    ]
    //   console.log(count, type);
    return (
        <div classname={styles.logo}>
            <img src={colors[color]} alt="" />
        </div>
    )
}

export default Logo
