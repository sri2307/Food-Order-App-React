import React,{Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header=props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>AS Meals</h1>
            <HeaderCartButton></HeaderCartButton>

        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Delecious Meals"/>
        </div>
    </Fragment>
}

export default Header;