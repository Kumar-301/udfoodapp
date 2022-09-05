import {Fragment} from 'react'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
export default function Header(props) {
  return (
    <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src="https://c8.alamy.com/comp/FE14M7/different-meals-on-black-plates-photographed-against-a-white-background-FE14M7.jpg" alt="meals"/>
    </div>
    </Fragment>
  )
}
