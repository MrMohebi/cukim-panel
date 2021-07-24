import React from 'react';
//css
import './css/login.css'
import {ButtonBase} from "@material-ui/core";
//libraries
import gsap from 'gsap'

const Login = () => {
    let [iconClass,setIconClass]= React.useState('fas fa-user-lock')
    let lastClicked = '';
    let handleFocusChange = (e)=>{
        let currentFocused = e.currentTarget.getAttribute('name')
        if (currentFocused !== lastClicked) {
            lastClicked = currentFocused
            let iconHolder = document.querySelector('.icon-holder')
            gsap.to(iconHolder,{
                scale:0.8,
                opacity:0,
                duration:0.2,
                onComplete:()=>{
                    setIconClass(currentFocused === 'name'?'fas fa-user':'fas fa-lock')
                    gsap.to(iconHolder,{
                        scale:1,
                        y:0,
                        opacity:1,
                        duration:0.2,
                    })
                }
            })
        }

    }
    return (
        <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
            <div className={'container h-100 d-flex justify-content-center align-items-center'}>
                <div className={'login-form shadow d-flex flex-column align-items-center position-relative'}>
                    <i className={'mt-3 icon-holder ' + iconClass} style={{
                        WebkitTextFillColor: 'transparent',
                        background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                        WebkitBackgroundClip: 'text',
                        fontSize: '5rem'
                    }}/>
                    <div className={'w-100 d-flex flex-column justify-content-center align-items-center mt-4'}>
                        <div dir="rtl" className="form__group field">
                            <input onFocus={handleFocusChange} type="input" className="form__field" placeholder="Name" name="name" id='username'
                                   required/>
                            <label htmlFor="username" className="form__label">نام کاربری</label>
                        </div>
                        <div dir="rtl" className="form__group field mt-3">
                            <input onFocus={handleFocusChange} type="input" className="form__field" placeholder="Name" name="password" id='password'
                                   required/>
                            <label htmlFor="password" className="form__label">کلمه عبور</label>
                        </div>
                        <div className={'purple-red-gradient-wrapper'}>
                            <ButtonBase className={'IranSansBold'}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background:'white',
                                    borderRadius:'8px'
                                }}
                            >
                                ورود
                            </ButtonBase>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;