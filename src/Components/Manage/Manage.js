import React from 'react';
//css
import './css/manage.css'
import '../../assets/inputCss/inputCss.css'
//other
import {ButtonBase} from "@material-ui/core";
import gsap from 'gsap';
import lottie from 'lottie-web';
// markup

const Manage = () => {

    let imgLocation = "img/"
    let [newResButtonContetn, setNewResButtonContetn] = React.useState([0,
            <span>
            <i className={'ml-2 fas fa-plus'}/>
            <span>
                ساخت رستوران جدید
            </span>
        </span>
        ]
    )
    let createNewRes = (e) => {
        let button = e.currentTarget
        let currentState = newResButtonContetn[0];
        let toggleNewResContainer = () => {
            gsap.to('.new-res-container', {
                height: currentState === 0 ? "60%" : 0,
            })
            gsap.to(button.firstChild, {
                y: currentState === 0 ? 30 : -30,
                duration: 0.2,
                ease: '.inOut',
                onComplete: () => {
                    setNewResButtonContetn(
                        currentState === 0 ?
                            [1,
                                <span>
                            <i className={'ml-2 fas fa-check'}/>
                            <span>
                                تایید
                            </span>
                        </span>
                            ]
                            :
                            [0,
                                <span>
                                <i className={'ml-2 fas fa-plus'}/>
                                <span>
                                    ساخت رستوران جدید
                                </span>
                            </span>
                            ]
                    )
                    gsap.set(button.firstChild, {
                        y: currentState === 0 ? -30 : 30,
                        duration: 0.2,
                        onComplete: () => {
                            gsap.to(button.firstChild, {
                                y: 0,
                                ease: 'power3.out',
                                duration: 0.2,
                            })
                        }
                    })
                }
            })
            gsap.to('.new-res-button', {
                // y: currentState === 0 ? -80 : 0,
                ease: "power3.out",
                duration: 0.7
            })
        }

        let form = document.querySelector('.new-res-container-inner')
        if (currentState) {
            let createdResSuccessfulAnimation = lottie.loadAnimation({
                autoplay: true,
                loop: false,
                container: document.querySelector('.animation-container'),
                path: '/lottie/res-created.json'
            })
            gsap.to('.new-res-button', {
                pointerEvents: 'none',
                duration: 0
            })
            gsap.to(form, {
                pointerEvents: 'none',
                duration: 0,
                onComplete: () => {
                    gsap.to(form, {
                        opacity: 0,
                        onComplete: () => {
                            setTimeout(() => {
                                toggleNewResContainer()
                                createdResSuccessfulAnimation.destroy()
                                gsap.to('.new-res-button', {
                                    pointerEvents: 'all',
                                    duration: 0
                                })
                            }, 1000)
                        }
                    })
                }
            })

        } else {
            gsap.to(form, {
                opacity: 1,
                pointerEvents: 'all'
            })
            toggleNewResContainer()
        }
    }

    let handlePlansClick = (e) => {
        if (!e.currentTarget.classList.contains('active-plan')) {
            let checkAnimation = lottie.loadAnimation({
                container: e.currentTarget.children[2],
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/lottie/check.json'
            })
            checkAnimation.hide()
            checkAnimation.stop()
            let plansArray = document.querySelector('.plans').childNodes
            plansArray.forEach(el => {
                el.classList.remove('active-plan')
            })
            if (e.currentTarget.classList.contains('active-plan')) {
                checkAnimation.destroy()
                e.currentTarget.classList.remove('active-plan')
            } else {
                checkAnimation.show()
                checkAnimation.play()
                e.currentTarget.classList.add('active-plan')
            }
            plansArray.forEach(el => {
                    if (!el.classList.contains('active-plan')) {
                        if (el.children[2].firstChild) {
                            let lottie = el.children[2].firstChild
                            lottie.remove()
                        }
                    }
                }
            )
        }

    }
    let userOptionsClickHandler = () => {
    let optionsContainer = document.querySelector('.user-options')
            if (optionsContainer.classList.contains('UOOpened')){
                optionsContainer.classList.remove('UOOpened')
                gsap.to(optionsContainer,{
                    opacity:0,
                    y:-20,
                    pointerEvents:'none',
                    duration:0.2,
                    ease:'power4.out'
                })
            }else{
                optionsContainer.classList.add('UOOpened')
                gsap.to(optionsContainer,{
                    opacity:1,
                    y:0,
                    pointerEvents:'all',
                    duration:0.2,
                    ease:'power4.out'
                })
            }

    }

    return (
        <div className={'main w-100 h-100 '}>
            <div className={'header-manage'}>
                <div className={'header-left-side h-sides'}>

                    <ButtonBase onClick={userOptionsClickHandler} style={{
                        whiteSpace: 'nowrap',
                        fontSize: '0.7rem',
                        padding: '0 20px 0 0',
                        borderRadius: '30px',
                        marginLeft: '10px'
                    }}>

                        <div className={'avatar'}>
                            <img className={'w-100 h-100'} style={{pointerEvents: 'none'}} src={imgLocation + "nav.png"}
                                 alt=""/>
                        </div>
                        <span className={' ml-2'}>محمد کریمدادی</span>
                        <i className={'fas fa-angle-down ml-2'}/>
                    </ButtonBase>
                    <div className={'user-options'}>
                        <ButtonBase
                        style={{width:'100%'}}
                        >
                            <span>
                            خروج
                            <i className={'fas fa-sign-out-alt ml-2'}/>
                        </span>
                        </ButtonBase>
                    </div>


                </div>
                <div className={'header-right-side h-sides justify-content-end'}>

                    <ButtonBase TouchRippleProps={{}} style={{
                        direction: 'rtl',
                        whiteSpace: 'nowrap',
                        borderRadius: '7px',
                        padding: '10px',
                        color: 'white',
                        background: '#3a86ff',
                        width: '160px',
                        fontSize: '0.7rem',
                        marginRight: '10px'
                    }}>
                        <i className={'ml-2 fas fa-edit'}/>
                        مدیریت پنل ها
                    </ButtonBase>

                </div>
            </div>

            <div className={'restaurants-holder d-flex flex-column  align-items-center  pb-4 height-wrapper'}>
                <div className={'each-res d-flex flex-row-reverse justify-content-around align-items-center'}>
                    <div className={'res-image'}>
                        <img height={"50px"} src={imgLocation + "sample.png"} alt=""/>
                    </div>
                    <h4> رستوران کوکی</h4>
                    <span style={{direction: "rtl", lineHeight: '1rem'}}>
                        {25 + " روز "}
                    </span>
                    <a href="/#"> اطلاعات کامل</a>
                </div>
                <div className={'new-res-container'}>

                    <div className={'new-res-container-inner'}>

                        <div dir="rtl" className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'
                                   required/>
                            <label htmlFor="name" className="form__label">نام فارسی</label>
                        </div>
                        <div dir="rtl" className="form__group field">
                            <input type="input" className="form__field" placeholder="eName" name="eName" id='eName'
                                   required/>
                            <label htmlFor="eName" className="form__label">نام اینگلیسی</label>
                        </div>
                        <div dir="rtl" className="form__group field">
                            <input type="input" className="form__field" placeholder="userName" name="userName"
                                   id='userName'
                                   required/>
                            <label htmlFor="userName" className="form__label">نام کاربری</label>
                        </div>
                        <div dir="rtl" className="form__group field">
                            <input type="input" className="form__field" placeholder="password" name="password" id='password'
                                   required/>
                            <label htmlFor="password" className="form__label">کلمه عبور</label>
                        </div>
                        <div className={'select-plan d-flex flex-column mt-4'}>
                            <span className={'mb-2 text-center'}>پلن های من</span>

                            <div className={'d-flex flex-row plans'}>
                                <div onPointerDownCapture={handlePlansClick}
                                     className="each-plan d-flex flex-column align-items-center">
                                    <h4 style={{
                                        direction: 'rtl',
                                        width: '89%',
                                        borderBottom: '1px solid rgb(0,0,0,0.2)'
                                    }}
                                        className={'mt-2 pb-2 text-center '}>
                                        پلن A
                                    </h4>
                                    <div className={'items-summery d-flex flex-column'}>
                                        <span>کامنت</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>کامنت</span>
                                    </div>
                                    <div className={'plan-check-place-holder'}/>
                                </div>
                                <div onPointerDownCapture={handlePlansClick}
                                     className="each-plan d-flex flex-column align-items-center">
                                    <h4 style={{width: '89%', borderBottom: '1px solid rgb(0,0,0,0.2)'}}
                                        className={'mt-2 pb-2 text-center '}>
                                        پلن A
                                    </h4>
                                    <div className={'items-summery d-flex flex-column'}>
                                        <span>کامنت</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>کامنت</span>
                                    </div>
                                    <div className={'plan-check-place-holder'}/>
                                </div>
                                <div onPointerDownCapture={handlePlansClick}
                                     className="each-plan d-flex flex-column align-items-center">
                                    <h4 style={{width: '89%', borderBottom: '1px solid rgb(0,0,0,0.2)'}}
                                        className={'mt-2 pb-2 text-center '}>
                                        پلن A
                                    </h4>
                                    <div className={'items-summery d-flex flex-column'}>
                                        <span>کامنت</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>کامنت</span>
                                    </div>
                                    <div className={'plan-check-place-holder'}/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{height: 300, width: 300, position: "absolute", marginTop: '20px'}}
                         className="animation-container">
                    </div>
                </div>
                <ButtonBase className={'new-res-button'} onClick={createNewRes} TouchRippleProps={{}}
                            style={{
                                direction: 'rtl',
                                whiteSpace: 'nowrap',
                                borderRadius: '10px',
                                padding: '10px',
                                color: 'white',
                                background: '#2b2d42',
                                width: '160px',
                                fontSize: '0.7rem',
                                margin: '20px auto 0 auto',
                                zIndex: '999'
                            }}>
                    {newResButtonContetn[1]}
                </ButtonBase>
            </div>


        </div>
    );
}
export default Manage;
